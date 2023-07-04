import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import { useRouter } from 'next/router';
import DeliverySelector from './components/deliverySelector';
import Link from 'next/link';

const Confirm = () => {
    const router = useRouter();
    const { pickup, dropoff } = router.query;

    console.log('pickup', pickup);
    console.log('dropoff', dropoff);

    const [pickupCoordinates, setPickupCoordinates] = useState(null);
    const [dropoffCoordinates, setDropoffCoordinates] = useState(null);

    const fetchCoordinates = (location, setter) => {
        fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` +
            new URLSearchParams({
                access_token:
                    'pk.eyJ1Ijoic3lsdmFuNDUyIiwiYSI6ImNsajQ4ZmszNTFuMGszbG9kancyMnZ4eGIifQ.kV1jHlVekAmurJt91LCpUw',
                limit: 1,
            })
        )
            .then((response) => response.json())
            .then((data) => {
                const coordinates = data.features[0]?.center;
                if (coordinates) {
                    setter(coordinates);
                }
            })
            .catch((error) => {
                console.error('Error fetching coordinates:', error);
            });
    };

    useEffect(() => {
        if (pickup) {
            fetchCoordinates(pickup, setPickupCoordinates);
        }
        if (dropoff) {
            fetchCoordinates(dropoff, setDropoffCoordinates);
        }
    }, [pickup, dropoff]);

    const BackButton = () => (
        <Link href="/">
            <Back>Back</Back>
        </Link>
    );

    return (
        <Wrapper>
            <BackButton />
            <Map
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <ConfirmContainer>
                <DeliverySelector />
                <ConfirmButton>Confirm Order</ConfirmButton>
            </ConfirmContainer>
        </Wrapper>
    );
};

export default Confirm;

const Wrapper = tw.div`
  flex flex-col bg-white h-screen
`;

const ConfirmContainer = tw.div`
  flex-1 flex flex-col
`;

const ConfirmButton = tw.div`
  my-4 mx-4 p-2 bg-blue-500 text-white text-center border-t-4 rounded hover:bg-blue-600 mx-2 my-2 text-2xl cursor-pointer w-full
`;

const Back = tw.div`
  bg-white text-xl absolute top-4 z-10 px-3 shadow-md cursor-pointer
`;
