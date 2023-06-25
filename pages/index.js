import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Main } from 'next/document';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3lsdmFuNDUyIiwiYSI6ImNsajQ4ZmszNTFuMGszbG9kancyMnZ4eGIifQ.kV1jHlVekAmurJt91LCpUw';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'MapContainer',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [9.072264, 7.491302],
      zoom: 3,
    });
  }, []);

  const [from, setFrom] = useState('');
  const [destination, setDestination] = useState('');
  const [quantity, setQuantity] = useState('');
  const [amount, setAmount] = useState('');

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <main>
      <Wrapper>
        <MapContainer id='MapContainer'></MapContainer>
        <LogoContainer>
          <Image src="/images/getcement_logo.png" alt="getcement_logo" width={100} height={40} />
        </LogoContainer>
        <InputSection>
          <Input placeholder="From" value={from} onChange={(e) => handleInputChange(e, setFrom)} />
          <Input placeholder="Destination" value={destination} onChange={(e) => handleInputChange(e, setDestination)} />
          <Input placeholder="Quantity" value={quantity} onChange={(e) => handleInputChange(e, setQuantity)} />
          <Input placeholder="Amount" value={amount} onChange={(e) => handleInputChange(e, setAmount)} />
        </InputSection>
        <BookNowButton>Book Now</BookNowButton>
      </Wrapper>
    </main>
  );
}

const Wrapper = tw.div`
flex flex-col bg-white-90000 h-screen
`;
const MapContainer = tw.div`
bg-red-500 flex-1
`;
const LogoContainer = tw.div`
  flex justify-left items-center py-2 px-2
`;
const InputSection = tw.div`
  flex flex-col items-center
`;

const Input = tw.input`
  mt-2 p-2 border border-gray-300 rounded
`;
const BookNowButton = tw.button`
  mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 mx-2 my-2
`;