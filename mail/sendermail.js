const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const CLIENT_ID = "9136118842-ugbp2oiuek2kritvh2es1jv0drsgq55l.apps.googleusercontent.com"
const CLIENT_SECRET = "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"
const REDIRECT_URL = "https://developers.google.com/oauthplayground"
const REFLESH_TOKEN = "1//04FG_FxyJnMFiCgYIARAAGAQSNwF-L9Ir19MLuY2UFbFTTdgbfmjfLPs5ljSw3_k55SkkNjRGSIo25F1XUr0Bb9RtShx4oajPxSQ"
const OAuth2Client = google.auth.OAuth2;

const oauthclient = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)
oauthclient.setCredentials({reflesh_token : REFLESH_TOKEN})


const sendermail = async () => {
  // create a SMTP transporter
  const accessToken = await oauthclient.getAccessToken('reflesh_token')
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth',
      user: 'kananecompagny@gmail.com',
      clientId : CLIENT_ID,
      clientSecret : CLIENT_SECRET,
      refleshToken : REFLESH_TOKEN,
      accessToken : accessToken
    }
  });

  // // define the email options
  // const mailOptions = {
  //   from: 'kananecompagny@gmail.com',
  //   to: 'geekrdc243@gmail.com',
  //   subject: 'Hello, world!',
  //   text: 'This is a test email for this api.'
  // };

  // // send the email
  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.error(error);
  //   } else {
  //     console.log(`Email sent: ${info.messageId}`);
  //   }
  // });
}    

module.exports = sendermail