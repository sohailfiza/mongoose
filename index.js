import express from 'express';
import dotenv from 'dotenv';
import { MongoDBURL, Port } from './config.js';
import mongoose from 'mongoose';
import router from './routes/Routes.js';

dotenv.config()

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  return response.status(200).send('Ok working');
});

app.use('/', router);

mongoose
  .connect(MongoDBURL || process.env.mongoDBURL)
  .then(() => {
    console.log('App connected to the database');
    app.listen(Port || process.env.Port, () => {
      console.log(`Server is running at http://localhost:${Port || process.env.Port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });