import  { useState } from "react";
import { IoSettings } from "react-icons/io5";
const DetailsHeader = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [settingsDropdownOpen, setSettingsDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
    setSettingsDropdownOpen(false); // Close settings dropdown if open
  };

  const toggleSettingsDropdown = () => {
    setSettingsDropdownOpen(!settingsDropdownOpen);
    setProfileDropdownOpen(false); // Close profile dropdown if open
  };

  return (
    <header className="bg-white shadow p-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {/* Title Section */}
      <div>
        <h1 className="text-2xl font-bold">Duas Page</h1>
      </div>

      {/* Search Section */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        <input
          type="text"
          placeholder="Search by Dua Name"
          className="border border-gray-300 rounded-md p-2 w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button className="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      {/* Profile and Settings Section */}
      <div className="relative flex items-center gap-4">
        {/* Profile Icon */}
        <div
          className="relative cursor-pointer"
          onClick={toggleProfileDropdown}
        >
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <img
              src="https://duaruqyah.com/assets/settings/profile.svg" // Replace with actual profile image if available
              alt="Profile"
              className="w-full h-full rounded-full"
            />
          </div>
          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
              <ul>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Support Us</li>
              </ul>
            </div>
          )}
        </div>

        {/* Settings Icon */}
        <div
          className="relative cursor-pointer"
          onClick={toggleSettingsDropdown}
        >
          <div className="w-8 h-8 flex items-center justify-center text-green-600">
          <IoSettings className="text-2xl" />
          </div>
          {settingsDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
              <ul>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Settings</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DetailsHeader;
