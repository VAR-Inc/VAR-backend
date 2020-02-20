import express from 'express';
import { signup, login } from '../controllers';
const authRouter = express();

authRouter.route('/signup')
	.post(signup);

authRouter.route('/login')
	.post(login);

export default authRouter;
