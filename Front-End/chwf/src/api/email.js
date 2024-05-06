const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

// Set up Express app
app.use(express.json());

// Set up /api/send-email endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Set up email options
  const mailOptions = {
    from: '"Your Name" <your-email@gmail.com>',
    to: 'recipient-email@gmail.com',
    subject: `New message from ${name}`,
    text: `${message}\n\nSent from ${email}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ success: false });
    } else {
      console.log('Message sent: %s', info.messageId);
      res.json({ success: true });
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});