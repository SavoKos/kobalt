const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

let transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

module.exports.sendWelcomeEmail = (email) => {
  transport
    .sendMail({
      from: process.env.MAIL_USER,
      to: email,
      subject: 'Welcome to Kobalt',
      text: 'Welcome to Kobalt Online Restaurant. Start ordering right now! - https://kobalt.savokos.com',
    })
    .catch((err) => console.log(err));
};