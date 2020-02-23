import Joi from '@hapi/joi';

export const signupSchema = Joi.object({
	email: Joi.string()
		.email()
		.required(),
	username: Joi.string()
		.min(3)
		.max(15)
		.required(),
	password: Joi.string()
		.regex(/^[a-zA-Z0-9]{6,20}$/)
		.rule({ message: 'Password should contain letters and numbers with minimum of 6 characters' })
		.required(),
	firstname: Joi.string().required(),
	lastname: Joi.string(),
	address: Joi.string().required(),
	lga: Joi.string().required(),
	state: Joi.string().required(),
	occupation: Joi.string().required(),
	phone: Joi.string().required()
});

export const resetPasswordSchema = Joi.object({
	password: Joi.string()
		.regex(/^[a-zA-Z0-9]{6,20}$/)
		.required(),
	confirmPassword: Joi.ref('password')
});
