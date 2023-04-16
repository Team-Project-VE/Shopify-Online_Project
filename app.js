const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const path = require('path');
const hostname = 'localhost';
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs')
require('dotenv').config();

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/shop', (req, res) => {
  console.log('The user click on the "shop"');
  res.sendFile(path.join(__dirname, '/public/shop/shop.html'));
});


app.get('/products', (req, res) => {
  console.log('The user click on the "products"');
  res.send(`
    <h1>Welcome from products</h1>
    <a href="/">Go back</a>
  `);
});

app.get('/pages', (req, res) => {
  console.log('The user click on the "pages"');
  res.send(`
    <h1>Welcome from pages</h1>
    <a href="/">Go back</a>
  `);
});

app.get('/shop-button', (req, res) => {
  console.log('The user click on the Shop Now button');
  res.send(`
    <h1>Hello from shop button</h1>
    <a href="/">Go back</a>
  `);
})

const subscribersFilePath = path.join(__dirname, 'subscribers.json');

app.post('/subscribe', async (req, res) => {
  console.log('Request body:', req.body);
  const { to } = req.body;

  if (!to || to.trim() === '') {
    return res.status(400).send('Please provide a valid email address.');
  }

  try {
    const subscribersData = fs.readFileSync(subscribersFilePath);
    const subscribers = JSON.parse(subscribersData);

    if (subscribers.includes(to)) {
      console.log('The user try to write already used email address');
      return res.status(400).send('Email address already subscribed');
    }

    subscribers.push(to);
    fs.writeFileSync(subscribersFilePath, JSON.stringify(subscribers, null, 2));
    res.sendStatus(200);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: 'vborisovit98@gmail.com',
      to: to,
      subject: 'New subscriber',
      text: 'Congratulations, you subscribed on our site successfully! We are happy :)',
    };

    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent');
  } catch (error) {
    console.error('Error subscribing email:', error);
    res.sendStatus(500);
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
})