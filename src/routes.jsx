import { createBrowserRouter } from "react-router-dom";



// import ProjectHome from "./Pages/Dashboard/HomeDashboard/ProjectHome/ProjectHome";
// import EditProjectHome from "./Pages/Dashboard/HomeDashboard/ProjectHome/EditProjectHome";


import Login from "./Pages/Shared/Login/Login";

import ErrorPage from "./Pages/Shared/Errorpage";
import Layout from "./Layout";
import Categoryspart from "./Pages/HomePage/CategoryPart/Categoryspart";
import CategoryDetails from "./Pages/HomePage/CategoryPart/CategoryDetails";
import Signup from "./Pages/Shared/Signup/Signup";


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
        path: "/",
        element: <CategoryDetails />,
      },
     

        ],
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
