const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  ignoreTLS: false,
  secure: false,
    user: 'kananecompagny@gmail.com',
    pass : 'cvadhkqbbwejhjhm',
})

module.exports = transporter