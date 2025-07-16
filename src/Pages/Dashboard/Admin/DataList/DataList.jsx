import { useEffect, useState } from "react";

const DataList = () => {
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await fetch("https://excelit-backend.onrender.com/api/admin/users");
        const usersJson = await usersRes.json();
        setUsers(usersJson);

        const bookingsRes = await fetch("https://excelit-backend.onrender.com/api/admin/bookings");
        const bookingsJson = await bookingsRes.json();
        setBookings(bookingsJson);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-center px-4">
        Loading admin dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-700">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Users Table */}
        <div className="bg-white shadow rounded-xl p-4 overflow-x-auto">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
            Users
          </h2>
          <table className="min-w-full text-xs md:text-sm text-left whitespace-nowrap">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="p-2">#</th>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="p-2">{i + 1}</td>
                  <td className="p-2">{user.displayName}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2 capitalize">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bookings Table */}
        <div className="bg-white shadow rounded-xl p-4 overflow-x-auto">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
            Bookings
          </h2>
          <table className="min-w-full text-xs md:text-sm text-left whitespace-nowrap">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="p-2">#</th>
                <th className="p-2">Pickup</th>
                <th className="p-2">Delivery</th>
                <th className="p-2">Type</th>
                <th className="p-2">Payment</th>
                <th className="p-2">Agent</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, i) => (
                <tr key={b._id} className="hover:bg-gray-50">
                  <td className="p-2">{i + 1}</td>
                  <td className="p-2">{b.pickupAddress}</td>
                  <td className="p-2">{b.deliveryAddress}</td>
                  <td className="p-2">{b.parcelType}</td>
                  <td className="p-2">{b.paymentMode}</td>
                  <td className="p-2">{b.deliveryAgentName || "-"}</td>
                  <td className="p-2">{b.status || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataList;
