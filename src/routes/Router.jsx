import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Emailverification from "../components/Emailverification";

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
    path: "/emailverification",
    element: <Emailverification />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
