import React, { useState } from 'react';
import mpesa from './Mpesa';

function PaymentForm() {
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const paymentResponse = await mpesa.stkPush({
        amount,
        phoneNumber,
      });

      console.log('Payment response:', paymentResponse);
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Pay with M-Pesa</button>
    </form>
  );
}

export default PaymentForm;
