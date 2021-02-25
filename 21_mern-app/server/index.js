const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

// Config
dotenv.config({ path: './config/config.env' })

connectDB();

const app = express()
app.use(bodyParser.json())

/// Config for development
if (process.env.NODE_ENV === 'development') {
  app.use(cors({
    origin: process.env.CLIENT_URL
  }))

  app.use(morgan('dev'));
  // Morgan give information about each request
  // Cors allow to deal with react for localhost at port 3000 without any problem
}

// Routes
const authRouter = require('./routes/auth.route')
app.use(`/api/`, authRouter)

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "PAGE NOT FOUND"
  })
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})
