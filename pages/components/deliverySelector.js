import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import trucks from '../../public/trucks.png';

const DeliverySelector = () => {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    // Fetch the quantity from an API or calculate it based on user input
    const fetchQuantity = async () => {
      try {
        const response = await fetch('fetchQuantityEndpoint'); // Replace 'fetchQuantityEndpoint' with the actual endpoint
        const data = await response.json();
        setQuantity(data.quantity);
      } catch (error) {
        console.error('Error fetching quantity:', error);
      }
    };

    fetchQuantity();
  }, []);

  useEffect(() => {
    const calculatePrice = () => {
      const totalPrice = quantity * 4900;
      setPrice(totalPrice);
    };

    calculatePrice();
  }, [quantity]);

  return (
    <Wrapper>
      <Title>Confirm Your Order</Title>
      <Truck>
        <img src={trucks} alt='trucks' width="100px" height="60" />
        <TruckDetails>
          <Time>10 mins away</Time>
          <Price>Total Amount: N{price}</Price>
        </TruckDetails>
      </Truck>
    </Wrapper>
  );
};

export default DeliverySelector;

const Truck = tw.div`
  flex-1 flex p-10 items-center
`;

const TruckDetails = tw.div`
  flex-1 flex mx-20
`;

const Time = tw.div`
  text-s text-blue-300
`;

const Price = tw.div`
  text-l text-black-500 mx-20
`;

const Title = tw.div`
  text-gray-600 text-center text-xs py-2 border-b
`;

const Wrapper = tw.div`
  flex-1
`;
