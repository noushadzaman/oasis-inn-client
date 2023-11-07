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
                element: <RoomDetail></RoomDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/roomDetail/${params.id}`)
            },
            {
                path: '/myBookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            }
        ]
    },
]);

export default router;