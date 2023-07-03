import axios from 'axios';

const initializePayment = (amount, email, reference) => {
  return axios.post(
    'https://api.paystack.co/transaction/initialize',
    {
      amount,
      email,
      reference,
    },
    {
      headers: {
        Authorization: `Bearer YOUR_PAYSTACK_SECRET_KEY`,
      },
    }
  );
};

const verifyPayment = (reference) => {
  return axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
    headers: {
      Authorization: `sk_live_ea260461d7f3d29054c1f4a4468194c942e6f75f`,
    },
  });
};

export default {
  initializePayment,
  verifyPayment,
};
