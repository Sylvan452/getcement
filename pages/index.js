import { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';
import Link from 'next/link';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3lsdmFuNDUyIiwiYSI6ImNsajQ4ZmszNTFuMGszbG9kancyMnZ4eGIifQ.kV1jHlVekAmurJt91LCpUw';

export default function Home() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'MapContainer',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [9.072264, 7.491302],
      zoom: 3,
    });
  }, []);


  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [quantity, setQuantity] = useState('');
  const [amount, setAmount] = useState('');

  console.log(pickup)

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <main>
      <Wrapper>
        <MapContainer id='MapContainer'></MapContainer>
        <LogoContainer>
          <img src="/images/getcement_logo.png" alt="getcement_logo" width={100} height={40} />
        </LogoContainer>
        <InputSection>
          <Input placeholder="pickup" value={pickup} onChange={(e) => setPickup(e.target.value)} />
          <Input placeholder="dropoff" value={dropoff} onChange={(e) => setDropoff(e.target.value)} />
          <SavedPlaces>
            Saved Places
          </SavedPlaces>
          <Input placeholder="Quantity" value={quantity} onChange={(e) => handleInputChange(e, setQuantity)} />
          <Input placeholder="Amount" value={amount} onChange={(e) => handleInputChange(e, setAmount)} />
        </InputSection>
        <Link href={{
          pathname: "/confirm",
          query: {
            pickup: pickup,
            dropoff: dropoff,
          }
        }}>
          <BookNowButton>
            Book Now
          </BookNowButton>
        </Link>
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
const SavedPlaces = tw.div`
  // Add your styles here
`;
const BookNowButton = tw.button`
  mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 mx-2 my-2 text-2xl cursor-pointer w-full
`;
