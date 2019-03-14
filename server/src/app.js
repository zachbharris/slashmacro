import express from 'express';
import cors from 'express-cors';
import bodyParser from 'body-parser';
import compression from 'compression';

// import routes
import router from './routes';
// import users from './routes/users';

const app = express();

// CORS INITIALIZATION
app.use(cors());

// body-parser middleware
app.use(bodyParser.json());

// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api
app.use('/api', router);

// GZIP COMPRESSION
app.use(compression());

export default app;
