import { useState } from "react";
import { Outlet } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Mobile hamburger button */}
      <button
        className="p-2 m-2 text-gray-700 rounded-md md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        {/* Hamburger icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {sidebarOpen ? (
            // X icon when open
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // Hamburger icon when closed
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 bg-white shadow w-64
          transform md:relative md:translate-x-0
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          z-40
        `}
      >
        <LeftSidebar />
      </div>

      {/* Overlay when sidebar open on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 p-4 md:ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
