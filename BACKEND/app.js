import express from 'express';

import router from './routes/appRouter.js';

export const app = express();

app.use(express.json()); // neccessary middleware for accepting json data from frontend

app.use('/', router); // mounted to router - homepage
// all routes should mouted first
// to get dynamic routes thing in a better way
// or splat will ignore our dynamic route

app.use('/*splat', (req, res, next) => {
  const error = new Error(`This route (${req.originalUrl}) does not exists`);
  error.statusCode = 400;
  next(error); // something is passed,  it will trigger the error handler middleware
});

app.use((err, req, res, next) => {
  console.log(err.statusCode);
  res.status(err.statusCode || 500).json({
    status: 'fail',
    statusCode: err.statusCode || 500,
    message: err.message,
  });
}); // error handler middleware
