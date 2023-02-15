import React, { useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import consultImg from "../assets/consultDoc.png";
import { Image } from "react-bootstrap";
export default function Map() {

    const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState(19.0144);
  const [longitude, setLongitude] = useState(72.8479);

  const ZOOM_LEVEL = 10;
  // console.log(`lat ${latitude}`);
  // console.log(`long ${longitude}`)

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=64a7dc984ba0d1453a2cedb01301f39d`;

  const attribution =
    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';
  const mapTilerUrl =
    "https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=3hwJsCotYsQ8PRjYwwbw";

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        setLatitude(response.data.coord.lat);
        setLongitude(response.data.coord.lon);
      });
    }
  };
  return (
    <div>
         
{data.main ? (
          <MapContainer
            className="leaflet-container "
            center={[latitude, longitude]}
            zoom={ZOOM_LEVEL}
          >
            <TileLayer url={mapTilerUrl} attribution={attribution} />
            
            <Marker position={[latitude, longitude]} >
              <Popup>{location}</Popup>
            </Marker>
            <Marker position={[18.8033, 73.1]}>
              <Popup>Panvel Hospital</Popup>
            </Marker>
            <Marker position={[18.9033, 73.25]}>
              <Popup>Niramay Hospital</Popup>
            </Marker>
            <Marker position={[19.1233, 73.22]}>
              <Popup>Vaishnav Eye Care</Popup>
            </Marker>
            <Marker position={[19.1133, 73.05]}>
              <Popup>Yash Clinic</Popup>
            </Marker>
            
          </MapContainer>
        ) : <div className="]"><Image src={consultImg} style={{height:"21rem",marginTop:"14rem"}}/></div>}
        
        <div className="search">
          <input
            value={location}
            className="form-control my-5 text-center searchBar"
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter Location"
            type="text"
            onKeyDown={searchLocation}
          />
        </div>

    </div>
  )
}
