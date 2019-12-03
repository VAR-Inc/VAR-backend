/* eslint-disable no-console */
import mongoose from 'mongoose';
import { MONGODB_URI } from '..';

mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});

const dbSetup = () => {
	const db = mongoose.connection;
	db.on('connected', () => {
		console.log('Connection to DB successful');
	});
	db.on('error', (error) => {
		console.log('error connecting to db', error.message);
	});

	db.on('disconnected', (reason) => {
		console.log(console.log('disconnected from DB', reason));
	});

	process.on('SIGINT', () => {
		db.close(() => {
			console.log('Disconnected fro DB due to application shut down');
			process.exit(0);
		});
	});
};

dbSetup();
