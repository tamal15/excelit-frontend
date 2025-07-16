import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const UpdateParcel = () => {
  const { user } = useAuth();
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(true);

  const deliveryAgentName = user?.displayName;

  const fetchParcels = async () => {
    if (!deliveryAgentName) return;

    try {
      const res = await fetch(
        `https://excelit-backend.onrender.com/api/parcelbooking/agent/${deliveryAgentName}`
      );
      const data = await res.json();
      setParcels(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParcels();
  }, [deliveryAgentName]);

  const handleStatusChange = async (parcelId, newStatus) => {
    try {
      const res = await fetch(
        `https://excelit-backend.onrender.com/api/parcelbooking/${parcelId}/status`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (res.ok) {
        fetchParcels(); // refresh
      } else {
        alert("Failed to update status");
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!deliveryAgentName) {
    return (
      <div className="text-center mt-10 text-red-500">
        You must be logged in as a delivery agent.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-md rounded-xl w-full max-w-6xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          My Assigned Parcels
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Delivery Agent: <span className="font-semibold">{deliveryAgentName}</span>
        </p>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : parcels.length === 0 ? (
          <p className="text-center text-gray-500">
            No parcels assigned to you.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border">
              <thead className="bg-blue-100 text-gray-700">
                <tr>
                  <th className="p-2 border">#</th>
                  <th className="p-2 border">Pickup</th>
                  <th className="p-2 border">Delivery</th>
                  <th className="p-2 border">Parcel Type</th>
                  <th className="p-2 border">Payment</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {parcels.map((parcel, idx) => (
                  <tr key={parcel._id} className="hover:bg-gray-50">
                    <td className="p-2 border">{idx + 1}</td>
                    <td className="p-2 border">{parcel.pickupAddress}</td>
                    <td className="p-2 border">{parcel.deliveryAddress}</td>
                    <td className="p-2 border">{parcel.parcelType}</td>
                    <td className="p-2 border">{parcel.paymentMode}</td>
                    <td className="p-2 border">
                      <select
                        value={parcel.status || "Assigned"}
                        onChange={(e) =>
                          handleStatusChange(parcel._id, e.target.value)
                        }
                        className="border rounded px-2 py-1"
                      >
                        <option value="Assigned">Assigned</option>
                        <option value="Picked Up">Picked Up</option>
                        <option value="In Transit">In Transit</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Failed">Failed</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateParcel;
