import { Outlet } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-full md:w-64 bg-white shadow md:h-auto">
        <LeftSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
