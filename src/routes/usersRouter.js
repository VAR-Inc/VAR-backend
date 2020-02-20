import express from 'express';
import { getUsers } from '../controllers';
const usersRouter = express();

usersRouter.route('/users')
	.get(getUsers);

export default usersRouter;
