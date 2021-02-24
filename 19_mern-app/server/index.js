const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const path = require('path')

// Server
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

// Config
dotenv.config()

// Middleware
app.use(cors())

// // Routes
// app.use('/user', require('./routes/use.router'))

// Connect to mongodb
const URI = process.env.MONGO_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log("Connected to mongodb")
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
});
