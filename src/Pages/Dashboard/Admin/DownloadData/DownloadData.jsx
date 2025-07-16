import { useEffect, useState } from "react";
import Papa from "papaparse";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const DownloadData = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("https://excelit-backend.onrender.com/api/admin/bookings");
        const json = await res.json();
        setBookings(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const exportCSV = () => {
    const csv = Papa.unparse(
      bookings.map((b) => ({
        Pickup: b.pickupAddress,
        Delivery: b.deliveryAddress,
        Type: b.parcelType,
        Payment: b.paymentMode,
        Agent: b.deliveryAgentName || "-",
        Status: b.status || "-",
        Date: b.createdAt?.slice(0, 10) || "-",
      }))
    );
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "bookings_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Bookings Report", 14, 14);

    const tableColumn = [
      "Pickup",
      "Delivery",
      "Type",
      "Payment",
      "Agent",
      "Status",
      "Date",
    ];
    const tableRows = bookings.map((b) => [
      b.pickupAddress,
      b.deliveryAddress,
      b.parcelType,
      b.paymentMode,
      b.deliveryAgentName || "-",
      b.status || "-",
      b.createdAt?.slice(0, 10) || "-",
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      theme: "striped",
      headStyles: { fillColor: [41, 128, 185] }, // nice blue header
      margin: { left: 14, right: 14 },
    });

    doc.save("bookings_report.pdf");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-600">
        Loading bookings...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-4 text-blue-700">
        Admin Dashboard — Bookings
      </h1>

      <div className="flex justify-end gap-2 mb-4">
        <button
          onClick={exportCSV}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Export CSV
        </button>
        <button
          onClick={exportPDF}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Export PDF
        </button>
      </div>

      <div className="bg-white shadow rounded-xl p-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
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
            {bookings.map((b, i) => (
              <tr key={b._id} className="hover:bg-gray-50">
                <td className="p-2">{i + 1}</td>
                <td className="p-2">{b.pickupAddress}</td>
                <td className="p-2">{b.deliveryAddress}</td>
                <td className="p-2">{b.parcelType}</td>
                <td className="p-2">{b.paymentMode}</td>
                <td className="p-2">{b.deliveryAgentName || "-"}</td>
                <td className="p-2">{b.status || "-"}</td>
                <td className="p-2">{b.createdAt?.slice(0, 10) || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DownloadData;
