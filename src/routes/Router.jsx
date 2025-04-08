import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/Login";
import SplashScreen from "../pages/SplashScreen";
import Emailverification from "../components/Emailverification";
import Register from "../components/Register";
import FillYourProfile from "../pages/FillYourProfile";
import Forgotpassword from "../components/forgotpassword";
import Newpassword from "../components/newpassword";
import Congratulationmodal from "../components/modal/Congratulationmodal";
import Congratulationmodall from "../components/modal/Congratulations";
import Allcategory from "../pages/allcategory";
import Test from "../components/test";

const router = createBrowserRouter([
  {
    path: "",
    element: <SplashScreen />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/emailverification",
    element: <Emailverification />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/fill-profile",
    element: <FillYourProfile />,
  },
  {
    path: "/frgtpassword",
    element: <Forgotpassword />,
  },
  {
    path: "/newpassword",
    element: <Newpassword />,
  },
  {
    path: "/congratulationmodall",
    element: <Congratulationmodall />,
  },
  {
    path: "/congratulationmodal",
    element: <Congratulationmodal />,
  },
  {
    path: "/allcategory",
    element: <Allcategory />,
  },
  {
    path: "test",
    element: <Test/>
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
