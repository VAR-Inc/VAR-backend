/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import express from 'express';
import User from '../models/user';
import { comparePassword } from '../helpers';
import { encodeJWT } from '../middlewares';
import profile from '../models/profile';
const loginRouter = express.Router();


loginRouter.route('/')
	.post(async (req, res, next) => {
		const { usernameOrEmail, password } = req.body;
		try {
			const user = await User.findOne({ email: usernameOrEmail }) || await User.findOne({ username: usernameOrEmail });
			const passwordValid = user === null ? false : await comparePassword(password, user);
			if (user && passwordValid) {
				const userProfile = await profile.findOne({ user: user._id });
				const { username } = user;
				const token = encodeJWT(user);
				return res.status(200).json({
					token, username, userProfile
				});
			}
			return res.status(400).json({
				sucess: false, message: 'login credentials incorrect, please check and try again'
			});
		} catch (exception) {
			next(exception);
		}
	});

export default loginRouter;
