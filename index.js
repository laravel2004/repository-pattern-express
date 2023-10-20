const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRouter = require('./routes/AuthRoute');
const activityRouter = require('./routes/ActivityRoute');
const listActivityRouter = require('./routes/ListActivityRoute');
const AuthMiddleware = require('./middlewares/AuthMiddleware');
const noteRouter = require('./routes/NoteRoute');

const authMiddleware = new AuthMiddleware(process.env.ACCESS_TOKEN);

app.use('/auth', authRouter);
app.use('/activity',authMiddleware.verifyToken ,activityRouter);
app.use('/list-activity',authMiddleware.verifyToken, listActivityRouter);
app.use('/note', authMiddleware.verifyToken, noteRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
})
