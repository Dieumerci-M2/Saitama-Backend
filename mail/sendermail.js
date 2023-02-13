const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: 'kananecompagny@gmail.com',
    pass : 'cvadhkqbbwejhjhm',
  }
})

module.exports = transporter