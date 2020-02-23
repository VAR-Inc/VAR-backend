/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import User from '../models/user';

export const getUsers = async (req, res, next) => {
	try {
		const users = await User.find({});
		return res.status(200).json({ success: true, users });
	} catch (err) {
		return next(err);
	}
};

// if (!req.token) {
// return res.status(401).json({
// success: false, message: 'You are not authorized'
// });
// }
// return res.status(200).json({
// success: true, message: 'Secret Route Reached'
// });
