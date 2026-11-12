import { app } from './app.js';

const port = 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
