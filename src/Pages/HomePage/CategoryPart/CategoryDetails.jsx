import { Outlet } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-64 bg-white shadow">
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
