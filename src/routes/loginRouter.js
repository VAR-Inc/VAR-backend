import express from 'express';
import { login, secret } from '../controllers';
const loginRouter = express();

loginRouter.route('/login')
	.post(login);

loginRouter.route('/secret')
	.get(secret);

export default loginRouter;
