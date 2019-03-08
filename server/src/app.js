import express from 'express';
import cors from 'express-cors';
import bodyParser from 'body-parser';

// import routes
import router from './routes';
// import users from './routes/users';

const app = express();

// body-parser middleware
app.use(bodyParser.json());

// CORS INITIALIZATION
app.use(cors());

// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api
app.use('/api', router);

// ERROR HANDLING
app.use((err, req, res, next) => {
  console.log(err);
  res.status(422).send({ error: err.message });
});

export default app;
