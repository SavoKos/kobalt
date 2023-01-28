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

module.exports.sendWelcomeEmail = (email, name) => {
  transport
    .sendMail({
      from: process.env.MAIL_USER,
      to: email,
      subject: 'Welcome to Kobalt',
      text: `Welcome to Kobalt Online Restaurant ${name}. Start ordering right now! - https://kobalt.savokos.com`,
    })
    .catch((err) => console.log(err));
};

module.exports.sendPasswordReset = (email, url) => {
  transport
    .sendMail({
      from: process.env.MAIL_USER,
      to: email,
      subject: 'Reset Password',
      text: url,
    })
    .catch((err) => console.log(err));
};
