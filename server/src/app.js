import express from 'express';
import cors from 'express-cors';

// import routes
import users from './routes/users';

const app = express();

// CORS
app.use(cors());

app.get('/', (req, res) => res.status(200).send('Hello World'));
app.get('/users', users);

export default app;