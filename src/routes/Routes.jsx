import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import About from "../pages/About/About";
import Appointment from "../pages/Appointment/Appointment";
import Blog from "../pages/Blog/Blog";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import Checkout from "../pages/Checkout/Checkout";
import Contacts from "../pages/Contacts/Contacts";
import Home from "../pages/Home/home";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contacts",
        element: <Contacts></Contacts>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/book/:id',
        element: <PrivateRoute><BookService></BookService></PrivateRoute>,
        loader: ({params}) => fetch(`https://car-doctor-server-try4.vercel.app/services/${params.id}`)
      },
      {
        path: '/checkout/:id',
        element: <Checkout></Checkout>,
        loader: ({params}) => fetch(`https://car-doctor-server-try4.vercel.app/services/${params.id}`)
      },
      {
        path: '/bookings',
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
      }
    ],
  },
]);

export default router;
