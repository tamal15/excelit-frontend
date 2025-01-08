import { FaPrayingHands } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa6";
const LeftSidebar = () => {
  return (
    <div className="flex flex-col items-center w-16 h-screen bg-gray-100 shadow-lg">
      {/* Top Icon */}
      <div className="flex items-center justify-center w-12 h-12 mt-4 bg-green-100 rounded-full">
        <span className="text-green-600 text-2xl"><FaPrayingHands /></span>
      </div>

      {/* Sidebar Icons */}
      <div className="flex flex-col items-center mt-8 space-y-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300">
          <span className="text-gray-600 text-xl"><FaHome /></span>
        </div>
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300">
          <span className="text-gray-600 text-xl">🔲</span>
        </div>
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300">
          <span className="text-gray-600 text-xl"><FaLightbulb /></span>
        </div>
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300">
          <span className="text-gray-600 text-xl"><MdMessage /></span>
        </div>
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300">
          <span className="text-gray-600 text-xl"><FaBookOpen /></span>
        </div>
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300">
          <span className="text-gray-600 text-xl">💬</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
