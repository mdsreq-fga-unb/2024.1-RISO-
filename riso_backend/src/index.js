import express from 'express';
import connectDatabase from './database/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import router from './routes/index.js';

const port = process.env.PORT || 3000;
const app = express();

const allowedOrigins = [
  'http://localhost:3001'
];

const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowedOrigins.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

app.use(cors(corsOptionsDelegate));
app.use(express.json());
app.use(router);

connectDatabase();

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));