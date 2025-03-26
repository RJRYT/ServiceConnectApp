import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import SplashScreen from "../pages/SplashScreen";

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
    path: "/splash",
    element: <SplashScreen />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
