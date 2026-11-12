import express from 'express';

import router from './routes/appRouter.js';

export const app = express();

app.use('/', router); // mounted to router - homepage
