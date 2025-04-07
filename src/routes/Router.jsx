import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Login from "../components/Login";
import SplashScreen from "../pages/SplashScreen";
import Emailverification from "../components/Emailverification";
import Register from "../components/Register";
import FillYourProfile from "../pages/FillYourProfile";
import Forgotpassword from "../components/forgotpassword";
import Newpassword from "../components/newpassword";
import Search from "../components/Search";

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
    element: <Login />,
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
    element: <Register />,
  },
  {
    path: "/fill-profile",
    element: <FillYourProfile />,
  },
  {
    path: "/frgtpassword",
    element: <Forgotpassword/>
  },
  {
    path:"/newpassword",
    element:<Newpassword/>
  },
  {
    path:"/search",
    element:<Search/>
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
