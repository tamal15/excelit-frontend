import { useEffect, useState } from "react";

const CountParcel = () => {
  const [data, setData] = useState([]); // summary data by date
  const [loading, setLoading] = useState(true);

  // Detailed parcels for selected date
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("total"); // 'total' | 'failed' | 'cod'
  const [detailedParcels, setDetailedParcels] = useState([]);
  const [detailLoading, setDetailLoading] = useState(false);

  // Fetch summary on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://excelit-backend.onrender.com/api/admin/bookings-by-date");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error loading summary:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Fetch detailed parcels for a date and filter
  const fetchParcelsDetails = async (date, filter) => {
    setSelectedDate(date);
    setSelectedFilter(filter);
    setDetailLoading(true);
    setDetailedParcels([]);
    try {
      const res = await fetch(
        `https://excelit-backend.onrender.com/api/admin/parcels-by-date?date=${date}&filter=${filter}`
      );
      const json = await res.json();
      setDetailedParcels(json);
    } catch (err) {
      console.error("Error loading parcels detail:", err);
      setDetailedParcels([]);
    } finally {
      setDetailLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-500">
        Loading summary...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Bookings Summary By Date
      </h1>

      {/* Summary Table */}
      <div className="bg-white shadow rounded-xl p-6 mb-10 overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-2">Date</th>
              <th className="p-2">Total Bookings</th>
              <th className="p-2">Failed Deliveries</th>
              <th className="p-2">COD Parcels</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row._id} className="border-b hover:bg-gray-50">
                <td className="p-2">{row._id}</td>
                <td className="p-2">{row.totalBookings}</td>
                <td className="p-2">{row.failedDeliveries}</td>
                <td className="p-2">{row.codParcels}</td>
                <td className="p-2">
                  <button
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={() => fetchParcelsDetails(row._id, "total")}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Section */}
      {selectedDate && (
        <div className="bg-white shadow rounded-xl p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 md:mb-0">
              Details for {selectedDate} —{" "}
              {selectedFilter === "total"
                ? "All Bookings"
                : selectedFilter === "failed"
                ? "Failed Deliveries"
                : "COD Parcels"}
            </h2>

            {/* Filter Buttons */}
            <div className="space-x-2">
              <button
                className={`px-3 py-1 rounded ${
                  selectedFilter === "total"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => fetchParcelsDetails(selectedDate, "total")}
              >
                All
              </button>
              <button
                className={`px-3 py-1 rounded ${
                  selectedFilter === "failed"
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => fetchParcelsDetails(selectedDate, "failed")}
              >
                Failed
              </button>
              <button
                className={`px-3 py-1 rounded ${
                  selectedFilter === "cod"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => fetchParcelsDetails(selectedDate, "cod")}
              >
                COD
              </button>
            </div>
          </div>

          {detailLoading ? (
            <p className="text-gray-500">Loading details...</p>
          ) : detailedParcels.length === 0 ? (
            <p className="text-gray-500">No parcels found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="p-2">#</th>
                    <th className="p-2">Pickup</th>
                    <th className="p-2">Delivery</th>
                    <th className="p-2">Type</th>
                    <th className="p-2">Payment</th>
                    <th className="p-2">Agent</th>
                    <th className="p-2">Status</th>
                    <th className="p-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {detailedParcels.map((parcel, index) => (
                    <tr key={parcel._id} className="border-b hover:bg-gray-50">
                      <td className="p-2">{index + 1}</td>
                      <td className="p-2">{parcel.pickupAddress || "-"}</td>
                      <td className="p-2">{parcel.deliveryAddress || "-"}</td>
                      <td className="p-2">{parcel.parcelType || "-"}</td>
                      <td className="p-2">{parcel.paymentMode || "-"}</td>
                      <td className="p-2">{parcel.deliveryAgentName || "-"}</td>
                      <td className="p-2">{parcel.status || "-"}</td>
                      <td className="p-2">
                        {parcel.createdAt ? parcel.createdAt.slice(0, 10) : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CountParcel;
