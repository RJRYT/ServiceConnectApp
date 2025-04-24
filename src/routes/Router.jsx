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
import Bookings from "../pages/BookingsList";
import Allcategory from "../pages/allcategory";
import BookingServices from "../pages/BookingServices";
import PaymentMethod from "../pages/PaymentMethod";
import PaymentType from "../pages/PaymentType";
import Erecipt from "../pages/Erecipt";
import Requestservice from "../pages/Requestservice";
import Paymentconformation from "../components/modal/paymentconform";
import ActiveServiceDetails from "../pages/ActiveServiceDetails";
import Reviewsdetails from "../pages/reviews";
import ComplaintForm from "../pages/ComplaintForm";
import NotificationList from "./../pages/NotificationList";

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
    path: "/allcategory",
    element: <Allcategory />,
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
      },
    ],
  },
  {
    path: "filtertest",
    element: <Test />,
  },
  {
    path: "bookings",
    element: <Bookings />,
  },
  {
    path: "/booking-details",
    element: <BookingServices />,
  },
  {
    path: "/providerprofile",
    element: <ProviderProfile />,
  },
  {
    path: "paymentmethod",
    element: <PaymentMethod />,
  },
  {
    path: "paymenttype",
    element: <PaymentType />,
  },
  {
    path: "Recipt",
    element: <Erecipt />,
  },
  {
    path: "/active-service-details",
    element: <ActiveServiceDetails />,
  },
  {
    path: "/request-service",
    element: <Requestservice />,
  },
  {
    path: "/paymentconform",
    element: <Paymentconformation />,
  },
  {
    path: "/reviews",
    element: <Reviewsdetails />,
  },
  ,
  {
    path: "/complaint-form",
    element: <ComplaintForm />,
  },
  {
    path: "/notifications",
    element: <NotificationList />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
