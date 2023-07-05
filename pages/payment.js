import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';

const PaymentForm = () => {
    // Set your Paystack public key
    const publicKey = 'pk_live_21414c6d619121376efd553ba7d93ce6da4488a6';

    // Define the payment success and failure callbacks
    const handlePaymentSuccess = (response) => {
        console.log('Payment successful!', response);
        // Perform any necessary actions on successful payment
    };

    const handlePaymentFailure = (error) => {
        console.error('Payment failed!', error);
        // Handle the payment failure scenario
    };

    // Initialize the payment options
    const paystackOptions = {
        email: 'customer@example.com', // Customer's email address
        amount: 100000, // Payment amount in kobo
        currency: 'NGN', // Payment currency
        reference: `${Math.floor(Math.random() * 1000000000) + 1}`, // Unique payment reference
        publicKey: publicKey, // Paystack public key
        onSuccess: handlePaymentSuccess, // Success callback
        onClose: handlePaymentFailure, // Failure callback
    };

    return (
        <div>
            {/* Display your payment form */}
            <h2>Make Payment</h2>
            <PaystackButton {...paystackOptions} />
        </div>
    );
};

export default PaymentForm;
