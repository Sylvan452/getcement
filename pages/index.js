import { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';
import Link from 'next/link';
import getcement from '../public/getcement_logo.png';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

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

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  useEffect(() => {
    const calculateAmount = () => {
      const pricePerUnit = 4900;
      const totalAmount = quantity * pricePerUnit;
      setAmount(totalAmount);
    };

    calculateAmount();
  }, [quantity]);

  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
      } else {
        setUser(null);
        router.push('/login');
      }
    });
  }, []);

  return (
    <main>
      <Wrapper>
        <MapContainer id='MapContainer'></MapContainer>
        <LogoContainer>
          <img src={getcement} width="120px" height="50px" alt="getcement_logo" />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage src={user && user.photoURL} onClick={() => signOut(auth)} />
          </Profile>
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
  flex justify-between items-center py-2 px-2
`;

const InputSection = tw.div`
  flex flex-col items-center
`;

const Input = tw.input`
  mt-2 p-2 border border-gray-300 rounded
`;

const SavedPlaces = tw.div`
  // Add styles here
`;

const BookNowButton = tw.button`
  mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 mx-2 my-2 text-2xl cursor-pointer w-full
`;

const Profile = tw.div`
flex items-center
`;

const Name = tw.div`
text-l mr-4 w-20
`;

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px cussor-pointer
`;
