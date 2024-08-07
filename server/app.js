import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
import passport from 'passport';

import usersRouter from './routes/api/users.js';
import boardsRouter from './routes/api/boards.js';

configDotenv({ path: './environment/.env' });

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

app.use(passport.initialize());

app.use('/api/users', usersRouter);
app.use('/api/boards', boardsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

const connection = mongoose.connect(process.env.DB_HOST);

connection
  .then(() => console.log('Database connection successful'))
  .catch(error => {
    console.log(`Database connection failed. Error: ${error}`);
    process.exit(1);
  });

export default app;
