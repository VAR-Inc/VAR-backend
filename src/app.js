/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import { errorHandler, unknownEndpoint, tokenExtractor } from './middlewares';
import { NODE_ENV } from './config';
import { authRouter, loginRouter } from './routes';
import './config/db';
const app = express();

app.use(cors({
	origin: 'http://localhost:8080',
	credentials: true
}));
app.use(tokenExtractor);

if (NODE_ENV === 'development') {
	app.use((req, res, next) => {
		console.log(req.method, '-', req.url);
		next();
	});
}

app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api', loginRouter);

app.use(errorHandler);
app.use(unknownEndpoint);


export default app;
