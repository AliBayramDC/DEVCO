require('dotenv').config();
const nodemailer = require('nodemailer');

console.log('Testing EMAIL_USER:', process.env.EMAIL_USER);
console.log('Testing EMAIL_PASS:', process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'recipient-email@example.com', // Replace with your test email
  subject: 'Nodemailer Environment Test',
  text: 'If you receive this, environment variables are working.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent:', info.response);
});
