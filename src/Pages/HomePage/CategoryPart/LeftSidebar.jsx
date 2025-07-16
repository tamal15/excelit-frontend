import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const LeftSidebar = () => {
  const { role } = useAuth(); // role could be: 'user', 'admin', 'delivery', etc.

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 hover:bg-gray-200 ${
      isActive ? "font-bold text-blue-600" : ""
    }`;

  return (
    <nav className="p-4 space-y-2">
      <NavLink to="/dashboard/home" className={linkClass}>
        Home
      </NavLink>

      {/* Only for role === 'user' */}
      {role === 'user' && (
        <>
          <NavLink to="/dashboard/parcelbooking" className={linkClass}>
            PercelBooking
          </NavLink>
          <NavLink to="/dashboard/bookinghistory" className={linkClass}>
            Book History
          </NavLink>
          <NavLink to="/dashboard/trackparcel" className={linkClass}>
            Track Parcel
          </NavLink>
        </>
      )}

      {role === 'delivery' && (
        <>
       <NavLink to="/dashboard/deliveryview" className={linkClass}>
        Delivery View
      </NavLink>
      <NavLink to="/dashboard/optomizedmap" className={linkClass}>
        Optimized Route
      </NavLink>
       <NavLink to="/dashboard/updateparcel" className={linkClass}>
        Update Parcel
      </NavLink>
</>
      )}
      {role === 'admin' && (
        <>
       <NavLink to="/dashboard/countparcel" className={linkClass}>
        Parcel Metrics
      </NavLink>
      <NavLink to="/dashboard/assaignparcel" className={linkClass}>
        Assign Parcel
      </NavLink>
       <NavLink to="/dashboard/datalist" className={linkClass}>
        View User & book
      </NavLink>
       <NavLink to="/dashboard/downloaddata" className={linkClass}>
        Export
      </NavLink>
</>
      )}

     
    </nav>
  );
};

export default LeftSidebar;
