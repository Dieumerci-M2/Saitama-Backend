const nodemailer = require('nodemailer');

const sendermail = async () => {
  // create a SMTP transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 465,
    secure: true, // use TLS
    auth: {
      user: 'user@example.com',
      pass: 'password'
    }
  });

  // define the email options
  const mailOptions = {
    from: 'user@example.com',
    to: 'recipient@example.com',
    subject: 'Hello, world!',
    text: 'This is a test email.'
  };

  // send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Email sent: ${info.messageId}`);
    }
  });
}    

module.exports = sendermail