import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/Login";
import SplashScreen from "../pages/SplashScreen";
import Emailverification from "../components/Emailverification";
import Register from "../components/Register";
import FillYourProfile from "../pages/FillYourProfile";
import Forgotpassword from "../components/forgotpassword";
import Newpassword from "../components/newpassword";
import Search from "../components/Search";
import Congratulationmodal from "../components/modal/Congratulationmodal";
import Congratulationmodall from "../components/modal/Congratulations";
import Delivery from "../pages/cakedelivery";
import DeliveryServices from "../pages/DeliveryServices";
import ProviderProfile from "../pages/ProvideerProfile";
import Home from "../pages/Home";
import Test from "../components/test";
import DashBoard from "../layouts/DashBoard";
import Nearby from "../components/nearby";

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
    path: "/cakedelivery",
    element: <Delivery />,
  },
  {
    path: "/delivery_services",
    element: <DeliveryServices />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/home",
    element: <DashBoard />,
    children: [
      {
        index: true,
        element: <Home />,
      }
    ],
  },
  {
    path: "filtertest",
    element: <Test />,
  },
  {
    path:"/providerprofile",
    element:<ProviderProfile/>
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
