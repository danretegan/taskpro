import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
import colors from 'colors';

import usersRouter from './routes/api/users.js';

configDotenv({ path: './environment/.env' });

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/users', usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

const connection = mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true, // Utilizează noul parser de URL-uri pentru a procesa URL-ul de conexiune.
  useUnifiedTopology: true, // Utilizează noul motor de topologie unificată pentru a gestiona conexiunea și topologia cluster-ului.
});

connection
  .then(() => {
    console.log(colors.bgGreen.italic.bold('Database connection successful!'));
  })
  .catch(error => {
    console.log(
      colors.red.bold(`Database connection failed. Error: ${error.message}`)
    );
    process.exit(1);
  });

export default app;
