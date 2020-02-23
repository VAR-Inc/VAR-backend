/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import User from '../models/user';
import { hashPassword, signupSchema, comparePassword } from '../helpers';
import { encodeJWT } from '../middlewares';

// Signup A New User
export const signup = async (req, res, next) => {
	const {
		username,
		email,
		password,
		firstname,
		lastname,
		address,
		lga,
		state,
		occupation,
		phone
	} = req.body;
	const lowerUsername = username.toLowerCase();

	const validateSignupData = {
		username: lowerUsername,
		email,
		password,
		firstname,
		lastname,
		address,
		lga,
		state,
		occupation,
		phone
	};

	const validSignup = signupSchema.validate(validateSignupData);
	if (validSignup.error) {
		return next(validSignup.error);
	}
	try {
		const userExists = (await User.findOne({ email: validSignup.value.email }))
			|| (await User.findOne({ username: validSignup.value.username }));
		if (userExists) {
			return res
				.status(400)
				.json({
					success: false,
					message: 'Email or username already in use. Sign in instead?'
				});
		}

		const newUser = new User({
			...validateSignupData,
			password: await hashPassword(password)
		});

		await newUser.save();
		const token = encodeJWT(newUser);
		return res
			.status(201)
			.json({
				message: 'registration successful', isLoggedIn: true, user: newUser, token
			});
	} catch (error) {
		next(error);
	}
};

// Login
export const login = async (req, res, next) => {
	const { usernameOrEmail, password } = req.body;
	try {
		const user = await User.findOne({ email: usernameOrEmail }) || await User.findOne({ username: usernameOrEmail });
		const passwordValid = user === null ? false : await comparePassword(password, user);
		if (user && passwordValid) {
			const token = encodeJWT(user);
			return res.status(200).json({
				isLoggedIn: true, token, user
			});
		}
		return res.status(400).json({
			message: 'login credentials incorrect, please check and try again'
		});
	} catch (error) {
		next(error);
	}
};
