import React from 'react';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.json());

const consumerKey = 'YOUR_CONSUMER_KEY';
const consumerSecret = 'YOUR_CONSUMER_SECRET';

app.post('/api/mpesa-payment', (req, res) => {
  const { phoneNumber, amount } = req.body;

  const auth =
    'Basic ' +
    new Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');

  const options = {
    url: 'https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
    method: 'POST',
    headers: {
      Authorization: auth,
    },
    json: {
      BusinessShortCode: 'YOUR_BUSINESS_SHORTCODE',
      Password: 'YOUR_PASSWORD', 
      Timestamp: 'YOUR_TIMESTAMP',
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: phoneNumber,
      PartyB: 'YOUR_PAYBILL_NUMBER',
      PhoneNumber: phoneNumber,
      CallBackURL: 'YOUR_CALLBACK_URL',
      AccountReference: 'YOUR_ACCOUNT_REFERENCE',
      TransactionDesc: 'Payment for XYZ',
    },
  };

  request(options, (error, response, body) => {
    if (error) {
      console.error('Mpesa payment error:', error);
      res.status(500).json({ error: 'Payment initiation failed' });
    } else {
      res.json({ paymentUrl: body.Data });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
