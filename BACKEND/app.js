import express from 'express';

import router from './routes/appRouter.js';

export const app = express();

app.use(express.json()); // neccessary middleware for accepting json data from frontend

app.use('/*splat', (req, res, next) => {
  const error = new Error(`This route (${req.originalUrl}) does not exists`);
  error.statusCode = 400;
  next(error); // something is passed,  it will trigger the error handler middleware
});

app.use((err, req, res, next) => {
  res.status(err.statusCode).json({
    status: 'fail',
    statusCode: err.statusCode,
    message: err.message,
  });
}); // error handler middleware

app.use('/', router); // mounted to router - homepage
