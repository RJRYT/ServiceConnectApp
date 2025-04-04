import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Login from "../components/Login";
import SplashScreen from "../pages/SplashScreen";
import Emailverification from "../components/Emailverification";
import Register from "../components/Register";
import Congratulationmodal from "../components/modal/Congratulationmodal";
import Congratulationmodall from "../components/modal/Congratulations";
import Allcategory from "../pages/allcategory";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {  
    path: "/login",
    element: <Login />
  },
  {
    path: "/splash",
    element: <SplashScreen />,
  },
  {
    path: "/emailverification",
    element: <Emailverification />,
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/congratulationmodall",
    element: <Congratulationmodall/>
  },
  {
    path: "/congratulationmodal",
    element: <Congratulationmodal/>
  },
  {
    path: "/allcategory",
    element: <Allcategory/>
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
