import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Login from "../components/Login";

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
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
