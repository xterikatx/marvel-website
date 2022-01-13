import "./index.css";

import "leaflet/dist/leaflet.css";

import React, { useState } from "react";
import { MapContainer as Map, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";
import { v4 as uuidv4 } from "uuid";

import { fetchLocalMapBox } from "../../api/maps";
import AsyncSelect from "react-select/async";

import mapPackage from "../../images/package.svg";
import mapPin from "../../images/pin.svg";

const initialPosition = { lat: -7.2153453, lng: -39.3153336 };
const mapPackageIcon = Leaflet.icon({
  iconUrl: mapPackage,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const mapPinIcon = Leaflet.icon({
  iconUrl: mapPin,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

export function MyMapComponent() {
  const [deliveries, setDeliveries] = useState([]);

  const [position, setPosition] = useState(null);

  const [name, setName] = useState("");
  const [complement, setComplement] = useState("");
  const [address, setAddress] = useState(null);
  const [location, setLocation] = useState(initialPosition);

  const loadOptions = async (inputValue, callback) => {
    const response = await fetchLocalMapBox(inputValue);
    let places = [];
    if (inputValue.length < 5) return;
    response.features.map((item) => {
      places.push({
        label: item.place_name,
        value: item.place_name,
        coords: item.center,
        place: item.place_name,
      });
    });

    callback(places);
  };

  const handleChangeSelect = (event) => {
    setPosition({
      longitude: event.coords[0],
      latitude: event.coords[1],
    });

    setAddress({ label: event.place, value: event.place });

    setLocation({
      lng: event.coords[0],
      lat: event.coords[1],
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (!address || !name) return;

    setDeliveries([
      ...deliveries,
      {
        id: uuidv4(),
        name,
        address: address?.value || "",
        complement,
        latitude: location.lat,
        longitude: location.lng,
      },
    ]);

    setName("");
    setAddress(null);
    setComplement("");
    setPosition(null);
  }

  return (
    <div id="page-map">
      <main>
        <form onSubmit={handleSubmit} className="landing-page-form">
          <fieldset>
            <legend>Deliveries</legend>

            <div className="input-block">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="address">Address</label>
              <AsyncSelect
                placeholder="Enter your address..."
                classNamePrefix="filter"
                cacheOptions
                loadOptions={loadOptions}
                onChange={handleChangeSelect}
                value={address}
              />
            </div>

            <div className="input-block">
              <label htmlFor="complement">Complement</label>
              <input
                placeholder="Ap / Nbr / House..."
                id="complement"
                value={complement}
                onChange={(event) => setComplement(event.target.value)}
              />
            </div>
          </fieldset>
          <button className="confirm-button" type="submit">
            OK
          </button>
        </form>
      </main>

      <Map
        center={location}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
        />

        {position && (
          <Marker
            icon={mapPinIcon}
            position={[position.latitude, position.longitude]}
          ></Marker>
        )}

        {deliveries.map((delivery) => (
          <Marker
            key={delivery.id}
            icon={mapPackageIcon}
            position={[delivery.latitude, delivery.longitude]}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              <div>
                <h3>{delivery.name}</h3>
                <p>
                  {delivery.address} - {delivery.complement}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </Map>
    </div>
  );
}
