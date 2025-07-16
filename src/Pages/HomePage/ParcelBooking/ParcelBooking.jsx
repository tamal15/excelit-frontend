import { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const ParcelBooking = () => {
  const { user } = useAuth();
  const names = user?.displayName || ""; // safe access

  const [form, setForm] = useState({
    pickupAddress: "",
    deliveryAddress: "",
    parcelType: "",
    paymentMode: "prepaid",
    customer: names,
    createdAt: new Date().toISOString(),
  });

  const parcelTypes = ["Small (0-1kg)", "Medium (1-5kg)", "Large (5kg+)"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.pickupAddress || !form.deliveryAddress || !form.parcelType) {
      alert("Please fill all the fields.");
      return;
    }

    try {
      const response = await fetch("https://excelit-backend.onrender.com/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Booking successful! ID: ${data.id}`);

        setForm({
          pickupAddress: "",
          deliveryAddress: "",
          parcelType: "",
          paymentMode: "prepaid",
          customer: names,
          createdAt: new Date().toISOString(),
        });
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit booking");
    }
  };

  // Update customer field if user name changes (optional)
  // This ensures customer is always synced with user.displayName
  // useEffect(() => {
  //   setForm((prev) => ({ ...prev, customer: names }));
  // }, [names]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-md rounded-xl w-full max-w-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Book Parcel Pickup
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Pickup Address */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Pickup Address
            </label>
            <input
              type="text"
              name="pickupAddress"
              value={form.pickupAddress}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Delivery Address
            </label>
            <input
              type="text"
              name="deliveryAddress"
              value={form.deliveryAddress}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Parcel Type */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Parcel Size/Type
            </label>
            <select
              name="parcelType"
              value={form.parcelType}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="">Select Parcel Type</option>
              {parcelTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Payment Mode */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Payment Mode
            </label>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMode"
                  value="cod"
                  checked={form.paymentMode === "cod"}
                  onChange={handleChange}
                  className="accent-blue-500"
                />
                <span>Cash on Delivery (COD)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMode"
                  value="prepaid"
                  checked={form.paymentMode === "prepaid"}
                  onChange={handleChange}
                  className="accent-blue-500"
                />
                <span>Prepaid</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default ParcelBooking;
