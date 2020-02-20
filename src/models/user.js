/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	username: { type: String },
	email: { type: String },
	password: { type: String },
	isAdmin: { type: Boolean, default: false },
	firstname: { type: String },
	lastname: { type: String },
	address: { type: String },
	about: { type: String },
	lga: { type: String },
	experience: { type: String },
	state: { type: String },
	occupation: { type: String },
	phone: { type: String },
	rating: { type: Number },
	comments: [{ type: String }]
});

userSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
		delete returnedObject.password;
	}
});

export default mongoose.model('User', userSchema);
