import { Outlet,  } from "react-router-dom";
// import Navber from "./Pages/Shared/Navber/Navber";


const Layout = () => {
  // const isHomeRoute = location.pathname === "/";

  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
