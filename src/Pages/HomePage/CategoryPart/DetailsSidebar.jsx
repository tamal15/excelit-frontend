import { useEffect, useState } from "react";
import { FaFolder } from "react-icons/fa";
import { MdSnippetFolder } from "react-icons/md";
import PropTypes from "prop-types";

const DetailsSidebar = ({ setSelectedSubCategory }) => {
  const [data, setData] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://excelit-backend.onrender.com/getcategoryparts");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const categorySubcategories = data.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = {};
    acc[item.category][item.subCategory] =
      (acc[item.category][item.subCategory] || 0) + 1;
    return acc;
  }, {});

  const uniqueCategories = Object.keys(categorySubcategories);

  return (
    <aside className="p-4  w-full sm:w-80 lg:w-80 xl:w-96">
      <h2 className="font-bold text-xl text-green-700 mb-4">Categories</h2>
      <ul className="space-y-4">
        {uniqueCategories.map((category, index) => (
          <li key={index}>
            <div
              className="flex items-center gap-4 p-2 rounded-lg  cursor-pointer hover:text-green-900"
              onClick={() =>
                setExpandedCategory(expandedCategory === category ? null : category)
              }
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
              <FaFolder />
              </div>
              <div>
                <p className="font-bold text-lg">{category}</p>
                <p className="text-sm text-gray-500">
                  Subcategories: {Object.keys(categorySubcategories[category]).length}
                </p>
              </div>
            </div>

            {expandedCategory === category && (
              <ul className="mt-4 pl-6 space-y-2">
                {Object.entries(categorySubcategories[category]).map(
                  ([subCategory, count], subIndex) => (
                    <li
                      key={subIndex}
                      className="flex items-center gap-4 p-3  rounded-lg cursor-pointer hover:text-green-900"
                      onClick={() => setSelectedSubCategory(subCategory)}
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                      <MdSnippetFolder />
                      </div>
                      <div>
                        <p className="font-bold">{subCategory}</p>
                        <p className="text-sm text-gray-500">Count: {count}</p>
                      </div>
                    </li>
                  )
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};
DetailsSidebar.propTypes = {
  setSelectedSubCategory: PropTypes.func.isRequired, // Corrected to validate function
};

export default DetailsSidebar;
