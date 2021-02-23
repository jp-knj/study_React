const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUplaod = require('express-fileupload');

// Config
dotenv.config();

// Server
const app = express();
app.use(express.json());
app.use(cookieParser);
app.use(fileUplaod({
  useTempFiles: true
}));

// Middleware
app.use(cors());

app.use('/', (req, res, next) => {
  res.json({ msg: "Hello Everyone!" })
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
});
