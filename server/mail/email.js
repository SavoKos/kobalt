const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

module.exports.sendEmail = (email, subject, text) => {
  transport
    .sendMail({
      from: process.env.MAIL_USER,
      to: email,
      subject: subject,
      text: text,
    })
    .catch((err) => console.log(err));
};
