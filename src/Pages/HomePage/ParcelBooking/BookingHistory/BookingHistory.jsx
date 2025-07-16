import { useEffect, useState } from "react";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("https://excelit-backend.onrender.com/api/bookings");
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error("Failed to fetch bookings", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-md rounded-xl w-full max-w-3xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Booking History
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : bookings.length === 0 ? (
          <p className="text-center text-gray-500">No bookings found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border">
              <thead className="bg-blue-100 text-gray-700">
                <tr>
                  <th className="p-2 border">#</th>
                  <th className="p-2 border">Pickup</th>
                  <th className="p-2 border">Delivery</th>
                  <th className="p-2 border">Type</th>
                  <th className="p-2 border">Payment</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, idx) => (
                  <tr key={b._id} className="hover:bg-gray-50">
                    <td className="p-2 border">{idx + 1}</td>
                    <td className="p-2 border">{b.pickupAddress}</td>
                    <td className="p-2 border">{b.deliveryAddress}</td>
                    <td className="p-2 border">{b.parcelType}</td>
                    <td className="p-2 border">{b.paymentMode.toUpperCase()}</td>
                    <td className="p-2 border">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        {b.status || "pending"}
                      </span>
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

export default BookingHistory;
