// /api/send.js

import nodemailer from 'nodemailer';
console.log('API endpoint hit for sending email');
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }
  console.log(1);
  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required' });
  }
  console.log(2, email, message);
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASSWORD,
      },
    });
console.log(3, transporter);
    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `New Message from ${email}`,
      text: message,
    };
console.log(4, mailOptions);
    await transporter.sendMail(mailOptions);
console.log(5,'Email sent successfully');
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (err) {
    console.error('Email sending error:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
