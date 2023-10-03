import React from 'react';


const Mpesa = require('mpesa-node');

const mpesa = new Mpesa({
  apiKey: 'YOUR_API_KEY',
  apiSecret: 'YOUR_API_SECRET',
});

module.exports = mpesa;
