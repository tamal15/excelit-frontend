import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const AdminAssignParcels = () => {
  const [parcels, setParcels] = useState([]);
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
console.log(user.displayName)
  const fetchData = async () => {
    setLoading(true);
    try {
      const parcelsRes = await fetch("https://excelit-backend.onrender.com/api/bookings");
      const parcelsData = await parcelsRes.json();

      const agentsRes = await fetch("https://excelit-backend.onrender.com/api/deliveryagents");
      const agentsData = await agentsRes.json();

      setParcels(parcelsData.filter((p) => !p.deliveryAgentId));
      setAgents(agentsData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAssign = async (parcelId, deliveryAgentId) => {
    try {
      const res = await fetch(
        `https://excelit-backend.onrender.com/api/parcelbooking/${parcelId}/assign`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ deliveryAgentId }),
        }
      );

      if (res.ok) {
        alert("Agent assigned!");
        fetchData();
      } else {
        const err = await res.json();
        alert("Error: " + err.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-md rounded-xl w-full max-w-4xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Assign Delivery Agents
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : parcels.length === 0 ? (
          <p className="text-center text-gray-500">No unassigned parcels.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border">
              <thead className="bg-blue-100 text-gray-700">
                <tr>
                  <th className="p-2 border">#</th>
                  <th className="p-2 border">Pickup</th>
                  <th className="p-2 border">Delivery</th>
                  <th className="p-2 border">Assign Agent</th>
                </tr>
              </thead>
              <tbody>
                {parcels.map((parcel, idx) => (
                  <tr key={parcel._id} className="hover:bg-gray-50">
                    <td className="p-2 border">{idx + 1}</td>
                    <td className="p-2 border">{parcel.pickupAddress}</td>
                    <td className="p-2 border">{parcel.deliveryAddress}</td>
                    <td className="p-2 border">
                      <select
                        onChange={(e) =>
                          handleAssign(parcel._id, e.target.value)
                        }
                        defaultValue=""
                        className="border rounded px-2 py-1"
                      >
                        <option value="" disabled>
                          Select Agent
                        </option>
                        {agents.map((agent) => (
                          <option key={agent._id} value={agent._id}>
                            {agent.displayName} ({agent.email})
                          </option>
                        ))}
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

export default AdminAssignParcels;
