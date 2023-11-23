import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Faq from "../pages/Faq/Faq";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Rooms from "../pages/Rooms/Rooms";
import RoomDetail from "../pages/RoomDetail/RoomDetail";
import MyBookings from "../pages/MyBookings/MyBookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>
            },
            {
                path: '/roomDetail/:id',
                element: <PrivateRoute><RoomDetail></RoomDetail></PrivateRoute>,
                loader: ({ params }) => fetch(`https://oasis-inn-server.vercel.app/roomDetail/${params.id}`)
            },
            {
                path: '/myBookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            }
        ]
    },
]);

export default router;