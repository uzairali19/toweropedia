import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import clientsRouter from './routes/client.js';
const HOSTNAME = 'localhost';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/clients', clientsRouter);
const CONNECTION =
  'mongodb+srv://uzairali:nAdB7wuwbqqslCFu@moodme-trail.wntop.mongodb.net/toweropedia?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION)
  .then(() => {
    app.listen(PORT, HOSTNAME, () =>
      console.log(`Connected at: http://${HOSTNAME}:${PORT}`)
    );
  })
  .catch((err) => console.log(err));
