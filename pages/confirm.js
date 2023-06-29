import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import { useRouter } from 'next/router';
import DeliverySelector from './components/deliverySelector';

const Confirm = () => {
    const router = useRouter();
    const { pickup, dropoff } = router.query;

    console.log("pickup", pickup);
    console.log("dropoff", dropoff);

    const [pickupCoordinates, setPickupCoordinates] = useState();
    const [dropoffCoordinates, setDropoffCoordinates] = useState();

    const fetchPickupCoordinates = (pickup) => {
        fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token:
                    'pk.eyJ1Ijoic3lsdmFuNDUyIiwiYSI6ImNsajQ4ZmszNTFuMGszbG9kancyMnZ4eGIifQ.kV1jHlVekAmurJt91LCpUw',
                limit: 1,
            })
        )
            .then((response) => response.json())
            .then((data) => {
                setPickupCoordinates(data.features[0].center);
            });
    };

    const fetchDropoffCoordinates = (dropoff) => {
        fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token:
                    'pk.eyJ1Ijoic3lsdmFuNDUyIiwiYSI6ImNsajQ4ZmszNTFuMGszbG9kancyMnZ4eGIifQ.kV1jHlVekAmurJt91LCpUw',
                limit: 1,
            })
        )
            .then((response) => response.json())
            .then((data) => {
                setDropoffCoordinates(data.features[0].center);
            });
    };

    useEffect(() => {
        fetchPickupCoordinates(pickup);
        fetchDropoffCoordinates(dropoff);
    }, [pickup, dropoff]);

    return (
        <Wrapper>
            <Map
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <ConfirmContainer>
                <DeliverySelector />

                <ConfirmButton>
                    Confirm Order
                </ConfirmButton>
            </ConfirmContainer>
        </Wrapper>
    );
};

export default Confirm;

const Delivery = tw.div`
flex-1 flex flex-col
`;

const Wrapper = tw.div`
  flex flex-col bg-white-900 h-screen
`;

const ConfirmContainer = tw.div`
  flex-1 flex flex-col
`;
const ConfirmButton = tw.div`
  my-4 mx-4 p-2 bg-blue-500 text-white text-center border-t-4 rounded hover:bg-blue-600 mx-2 my-2 text-2xl cursor-pointer w-full
`;
