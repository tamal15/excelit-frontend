import { useEffect, useState } from "react";
import DetailsSidebar from "./DetailsSidebar";
import DetailsProduct from "./DetailsProduct";
import DetailsHeader from "./DetailsHeader";
import LeftSidebar from "./LeftSidebar";

const CategoryDetails = () => {
  const [data, setData] = useState([]); // All products
  const [selectedSubCategory, setSelectedSubCategory] = useState(null); // Selected subcategory

  // Fetch all product data from the API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://ird-backend-2mto.onrender.com/getcategoryparts");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
       <DetailsHeader />
      <div className="flex flex-col md:flex-row p-4 gap-4">
         <LeftSidebar/>
            <div className="md:w-1/4 w-full bg-white shadow-md rounded-md">
          <DetailsSidebar setSelectedSubCategory={setSelectedSubCategory} />
        </div>

        {/* Pass all products and the selected subcategory */}
        <div className="md:w-3/4 w-full bg-white shadow-md rounded-md">
          <DetailsProduct data={data} selectedSubCategory={selectedSubCategory} />
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
