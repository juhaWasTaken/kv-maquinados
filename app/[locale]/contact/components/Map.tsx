'use client'
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
export function Map() {
    const mapRef = React.useRef(null);
    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: "weekly"
            })
            const { Map } = await loader.importLibrary('maps')
            //init marker
            const { Marker } = await loader.importLibrary('marker')
            const position = {
                lat: 26.058020,
                lng: -98.317130
            }
            //map options
            const mapOptions = {
                center: position,
                zoom: 17
            }
            //setup map
            const map = new Map(mapRef.current, mapOptions);
            //put up marker
            const marker = new Marker({
                map: map,
                position: position
            })
        }
        initMap();
    }, [])
    return (
        <div className="h-[400px] m-4 lg:h-auto lg:w-[50%]" ref={mapRef} ></div>
    )
}