
import React, { useState } from 'react';

const MpesaPayment = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handlePayment = async () => {
    try {
      // Make a POST request to your backend server to initiate the payment
      const response = await fetch('/api/mpesa-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, amount }),
      });

      if (response.ok) {
        // Redirect the user to the Mpesa payment page or handle the response as needed
        const paymentData = await response.json();
        window.location.href = paymentData.paymentUrl;
      } else {
        // Handle error
        console.error('Payment initiation failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Mpesa Payment</h2>
      <form>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="button" onClick={handlePayment}>
          Pay with Mpesa
        </button>
      </form>
    </div>
  );
};

export default MpesaPayment;
