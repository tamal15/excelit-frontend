import PropTypes from "prop-types";
import { FaCopy, FaShareAlt, FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";

const DetailsProduct = ({ data, selectedSubCategory }) => {
  const handleCopy = (product) => {
    const copyData = `Description: ${product?.description || "N/A"}
Category: ${product.category}
Price: ${product.price}`;
    navigator.clipboard.writeText(copyData);
    alert("Product data copied to clipboard!");
  };

  const handleShare = () => alert("Share functionality coming soon!");
  const handleFavorite = () => alert("Added to favorites!");
  const handleAddToCart = () => alert("Added to cart!");
  const handleView = () => alert("Viewing product details!");

  // Filter data based on selectedSubCategory
  const filteredData = selectedSubCategory
    ? data.filter((product) => product.subCategory === selectedSubCategory)
    : data;

  return (
    <div className="h-screen p-6 bg-gray-100 flex-grow overflow-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
        Explore Products
      </h2>
      <div className="flex flex-col gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((product) => (
            <div
              key={product._id}
              className="flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {product.subCategory}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  <span className="text-gray-700 text-lg font-medium">
                    {product?.description}
                  </span>
                </p>
                <h6 className="text-green-700 font-bold">Reference:</h6>
                <p className="text-lg font-bold mb-4">{product.reference}</p>
              </div>
              <div className="p-4 flex flex-col items-center gap-2">
                <button onClick={() => handleCopy(product)} className="hover:bg-gray-300">
                  <FaCopy className="text-gray-600 text-lg" />
                </button>
                <button onClick={handleShare} className="hover:bg-gray-300">
                  <FaShareAlt className="text-gray-600 text-lg" />
                </button>
                <button onClick={handleFavorite} className="hover:bg-gray-300">
                  <FaHeart className="text-gray-600 text-lg" />
                </button>
                <button onClick={handleAddToCart} className="hover:bg-gray-300">
                  <FaShoppingCart className="text-gray-600 text-lg" />
                </button>
                <button onClick={handleView} className="hover:bg-gray-300">
                  <FaEye className="text-gray-600 text-lg" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available for this subcategory.</p>
        )}
      </div>
    </div>
  );
};

DetailsProduct.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedSubCategory: PropTypes.string,
};

export default DetailsProduct;
