import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, DirectionsRenderer } from "@react-google-maps/api";
import useAuth from "../../../Hooks/useAuth";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 23.8103, // Default center (Dhaka)
  lng: 90.4125,
};

const OptimizedRoute = () => {
  const [parcels, setParcels] = useState([]);
  const [directions, setDirections] = useState(null);
  const { user } = useAuth();
  const agentName = user?.displayName;

  useEffect(() => {
    if (!agentName) return;

    const fetchParcels = async () => {
      try {
        const res = await fetch(
          `https://excelit-backend.onrender.com/api/parcelbooking/agent/${agentName}`
        );
        const json = await res.json();
        setParcels(json);
      } catch (err) {
        console.error(err);
      }
    };

    fetchParcels();
  }, [agentName]);

  useEffect(() => {
    if (!window.google || parcels.length === 0) return;

    const service = new window.google.maps.DirectionsService();

    if (parcels.length === 1) {
      service.route(
        {
          origin: parcels[0].pickupAddress,
          destination: parcels[0].deliveryAddress,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === "OK" && result) {
            setDirections(result);
          } else {
            console.error("Directions request failed", result);
          }
        }
      );
    } else {
      const waypoints = parcels.slice(1, -1).map((p) => ({
        location: p.deliveryAddress,
        stopover: true,
      }));

      service.route(
        {
          origin: parcels[0].pickupAddress,
          destination: parcels[parcels.length - 1].deliveryAddress,
          waypoints: waypoints,
          optimizeWaypoints: true,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === "OK" && result) {
            setDirections(result);
          } else {
            console.error("Directions request failed", result);
          }
        }
      );
    }
  }, [parcels]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-4 text-blue-700">
        Optimized Delivery Route for {agentName || "Loading..."}
      </h1>

      {!agentName ? (
        <p className="text-center text-gray-600">Loading agent info...</p>
      ) : parcels.length === 0 ? (
        <p className="text-center text-gray-600">No parcels assigned yet.</p>
      ) : (
        <LoadScript googleMapsApiKey="AIzaSyAkVn9Nh7Yuj1TLsx-YdyNCxzBU76Q16MY">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
            {directions && <DirectionsRenderer directions={directions} />}
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};

export default OptimizedRoute;
