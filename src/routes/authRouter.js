import express from 'express';
import { signup } from '../controllers';
const authRouter = express();

authRouter.route('/signup')
	.post(signup);

export default authRouter;
