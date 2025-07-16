import { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import useAuth from "../../../Hooks/useAuth";

const socket = io("http://localhost:5000");

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 23.8103,
  lng: 90.4125,
};

const TrackParcel = () => {
  const {user}=useAuth()
  const customerName = user?.displayName;

  const [parcels, setParcels] = useState([]);
  const [locations, setLocations] = useState({});

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAkVn9Nh7Yuj1TLsx-YdyNCxzBU76Q16MY",
  });

  useEffect(() => {
    if (!customerName) return;

    axios
      .get(`https://excelit-backend.onrender.com/api/parcels?customerName=${customerName}`)
      .then((res) => {
        setParcels(res.data);

        // initialize location to pickup address (or some default)
        const initialLocations = {};
        res.data.forEach((p) => {
          initialLocations[p._id] = { lat: 23.8, lng: 90.4 };
          socket.on(`parcel-${p._id}`, ({ lat, lng }) => {
            setLocations((prev) => ({
              ...prev,
              [p._id]: { lat, lng },
            }));
          });
        });
        setLocations(initialLocations);
      });
  }, [customerName]);

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Tracking your parcels ({customerName})
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Parcel Details</h2>
          {parcels.length === 0 && <p>No parcels found.</p>}
          {parcels.map((p) => (
            <div key={p._id} className="mb-2 border-b pb-2">
              <p><strong>Pickup:</strong> {p.pickupAddress}</p>
              <p><strong>Delivery:</strong> {p.deliveryAddress}</p>
              <p><strong>Status:</strong> {p.status || "In Progress"}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-2 rounded shadow">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
          >
            {Object.entries(locations).map(([id, loc]) => (
              <Marker key={id} position={loc} />
            ))}
          </GoogleMap>
        </div>
      </div>
    </div>
  );
};

export default TrackParcel;
