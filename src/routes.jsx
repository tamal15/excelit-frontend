import { createBrowserRouter } from "react-router-dom";



// import ProjectHome from "./Pages/Dashboard/HomeDashboard/ProjectHome/ProjectHome";
// import EditProjectHome from "./Pages/Dashboard/HomeDashboard/ProjectHome/EditProjectHome";


import Login from "./Pages/Shared/Login/Login";

import ErrorPage from "./Pages/Shared/Errorpage";
import Layout from "./Layout";
import Categoryspart from "./Pages/HomePage/CategoryPart/Categoryspart";
import CategoryDetails from "./Pages/HomePage/CategoryPart/CategoryDetails";
import Signup from "./Pages/Shared/Signup/Signup";
import ParcelBooking from "./Pages/HomePage/ParcelBooking/ParcelBooking";
import BookingHistory from "./Pages/HomePage/ParcelBooking/BookingHistory/BookingHistory";
import TrackParcel from "./Pages/HomePage/ParcelBooking/TrackParcel/TrackParcel";
import AdminAssignParcels from "./Pages/Dashboard/Admin/AdminAssignParcels/AdminAssignParcels";
import DeliveryAgentParcels from "./Pages/Dashboard/DeliveryAgent/DeliveryAgentParcels/DeliveryAgentParcels";
import UpdateParcel from "./Pages/Dashboard/DeliveryAgent/UpdateParcel/UpdateParcel";
import CountParcel from "./Pages/Dashboard/Admin/CountParcel/CountParcel";
import DataList from "./Pages/Dashboard/Admin/DataList/DataList";
import DownloadData from "./Pages/Dashboard/Admin/DownloadData/DownloadData";
import OptimizedRoute from "./Pages/Dashboard/DeliveryAgent/OptimizedRoute/OptimizedRoute";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <>
       <ErrorPage/>
      </>
    ),
    children: [
      
     
      {
        path: "/categoryspart",
        element: <Categoryspart />,
      },
     
      
      {
        path: "/dashboard",
        element: <CategoryDetails />,
      },
     {
    path: "/",
    element: <Login />,
  },

        ],
      },

       {
    path: "/dashboard",
    element: <CategoryDetails />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <DashboardHome />,
      },
       {
        path: "parcelbooking",
        element: <ParcelBooking />,
      },
      {
        path: "bookinghistory",
        element: <BookingHistory />,
      },
      {
        path: "trackparcel",
        element: <TrackParcel />,
      },
      {
        path: "assaignparcel",
        element: <AdminAssignParcels />,
      },
      {
        path: "deliveryview",
        element: <DeliveryAgentParcels />,
      },
      {
        path: "updateparcel",
        element: <UpdateParcel />,
      },
      {
        path: "countparcel",
        element: <CountParcel />,
      },
      {
        path: "datalist",
        element: <DataList />,
      },
      {
        path: "downloaddata",
        element: <DownloadData />,
      },
      {
        path: "optomizedmap",
        element: <OptimizedRoute/>,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  


      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },

     
]);
export default router;
