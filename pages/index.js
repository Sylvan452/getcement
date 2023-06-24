import { useEffect } from 'react';
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

  return (
    <main>
      <Wrapper>
        <MapContainer id='MapContainer'></MapContainer>
        <ActionItems>Start</ActionItems>
      </Wrapper>
    </main>
  );
}

const Wrapper = tw.div`
flex flex-col bg-red-300 h-screen
`;
const MapContainer = tw.div`
bg-red-500 flex-1
`;
const ActionItems = tw.div`
bg-green-300 flex-1
`;
