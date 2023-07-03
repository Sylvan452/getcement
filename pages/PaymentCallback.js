import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { verifyPayment } from './paystackService';

const PaymentCallback = () => {
    const router = useRouter();
    const { reference } = router.query;

    useEffect(() => {
        if (reference) {
            verifyPayment(reference)
                .then((response) => {
                    const { data } = response;
                    if (data.data.status === 'success') {

                    } else {

                    }
                })
                .catch((error) => {
                    console.error('Paystack error:', error);
                });
        }
    }, [reference]);

    return <div>Processing payment...</div>;
};

export default PaymentCallback;
