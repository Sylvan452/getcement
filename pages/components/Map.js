import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1Ijoic3lsdmFuNDUyIiwiYSI6ImNsajQ4ZmszNTFuMGszbG9kancyMnZ4eGIifQ.kV1jHlVekAmurJt91LCpUw';

const Map = (props) => {

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'MapContainer',
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [9.072264, 7.491302],
            zoom: 3,
        })
        if (props.pickupCoordinates) {
            addToMap(map, props.pickupCoordinates)
        }

        if (props.dropoffCoordinates) {
            addToMap(map, props.dropoffCoordinates)
        }

        if (props.pickupCoordinates && props.dropoffCoordinates) {
            map.fitBounds([
                props.dropoffCoordinates,
                props.pickupCoordinates
            ], {
                padding: 60
            })
        }
    }, [props.pickupCoordinates, props.dropoffCoordinates])

    const addToMap = (map, Coordinates) => {
        const marker1 = new mapboxgl.Marker()
            .setLngLat(Coordinates)
            .addTo(map);
    }


    return <Wrapper id='MapContainer'></Wrapper>
}

export default Map

const Wrapper = tw.div`
flex-1`