import express from 'express';
import bodyParser from 'body-parser';
import * as dotevn from 'dotenv';
import DataBase from './database';
import userRouter from './api/routes/user';
import surveyRouter from './api/routes/survey';
import questionRouter from './api/routes/question';
import imageRouter from './api/routes/image';

dotevn.config();

DataBase.connect().then(async (con) => {
  const app = express();
  app.use(bodyParser.json());
  app.get('/', (req, res) => res.send('Hello from Toddle API Assessment!!'));
  app.use('/api/user', userRouter);
  app.use('/api/survey', surveyRouter);
  app.use('/api/question', questionRouter);
  app.use('/api/image', imageRouter);

  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
});
