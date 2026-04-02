import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";

const LocationMarker = ({setLocation}) => {

  const [position , setPosition] = useState(null);

  useMapEvents({

    click(e){

      setPosition(e.latlng);

      setLocation(e.latlng);

    }

  });

  return position === null ? null : (
    <Marker position={position}/>
  );

};

export default function MapPicker({setLocation}) {

  return (

    <MapContainer
      center={[20.5937,78.9629]}   // India center
      zoom={5}
      className="h-48 w-full rounded-lg"
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker setLocation={setLocation}/>

    </MapContainer>

  );

}