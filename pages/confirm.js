import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import { useRouter } from 'next/router';

const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query

    console.log("pickup", pickup)
    console.log("dropoff", dropoff)

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
                {pickupCoordinates && (
                    <div>
                        Pickup Coordinates: {pickupCoordinates[0]}, {pickupCoordinates[1]}
                    </div>
                )}
                {dropoffCoordinates && (
                    <div>
                        Dropoff Coordinates: {dropoffCoordinates[0]}, {dropoffCoordinates[1]}
                    </div>
                )}
            </ConfirmContainer>
        </Wrapper>
    );
};

export default Confirm;

const Wrapper = tw.div`
  flex h-screen flex-col
`;

const ConfirmContainer = tw.div`
  flex-1 
`;
