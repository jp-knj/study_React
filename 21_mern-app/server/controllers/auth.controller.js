const User = require('../models/auth.model')
const expressJwt = require('express-jwt')
const { OAuth2Client } = require('google-auth-library')
const _ = require('lodash')
const fetch = require('node-fetch')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken');

// Send email using sendgrid
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.MAIL_KEY);

// Error handler to get some messages from database errors
const { errorHandler } = require('../helpers/dbErrorHandling')

exports.registerController = (req, res) => {
  const { name, email, password } = req.body;
  const errors = validationResult(req);

  // Validation to req.body we will create custom validation iin seconds
  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
    return res.status(422).json({
      error: firstError
    });

  } else {
    User.findOne({email}).exec((err, user) => {
      // if user exists
      if (user) {
        return res.status(400).json({
          error: "Email is token"
        });
      }
    })
    // Generate Token
    const token = jwt.sign({name,email,password},
      process.env.JWT_ACCOUNT_ACTIVATION,
      {
        expiresIn: '15m'
      }
    )
    // Email data sending
    const emailData = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `認証リンクをこちら`,
      html: `
        <h1>こちらのリンクをクリックしてください</h1>
        <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
        <hr/>
        <p>リンク</p>
        <p>${process.env.CLIENT_URL}</p>
      `
    }

    sgMail.send(emailData).then(sent => {
        return res.json({
          message: `${email}にメールを送信しました`
        })
      }).catch(err => {
      return res.status(400).json({
        error: errorHandler(err)
      })
    })
  }
};
