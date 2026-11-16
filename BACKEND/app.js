import express from 'express';

import router from './routes/appRouter.js';

export const app = express();

app.use(express.json()); // neccessary middleware for accepting json data from frontend

app.use('/', router); // mounted to router - homepage
