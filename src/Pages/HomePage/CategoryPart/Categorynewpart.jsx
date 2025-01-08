import { useLocation } from "react-router-dom";

const Categorynewpart = () => {
  const location = useLocation();
  const { data } = location.state || { data: [] };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Category Details</h1>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold text-gray-700">
                Subcategory: {item.subCategory}
              </h2>
              <p className="text-sm text-gray-500">Model: {item.model}</p>
              <p className="text-sm text-gray-500">
                Phone: {item.phone || "N/A"}
              </p>
              <p className="text-sm text-gray-500">
                Condition: {item.condition}
              </p>
              <p className="text-sm text-gray-500">District: {item.district}</p>
              <p className="text-sm text-gray-500">Division: {item.division}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No data available for this category.</p>
      )}
    </div>
  );
};

export default Categorynewpart;
