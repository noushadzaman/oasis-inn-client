import { NavLink } from "react-router-dom";

const NavbarItems = () => {
    return (
        <div className="flex">

            <NavLink className={({ isActive }) =>
                isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
            } to="gallery">Gallery</NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
            } to="rooms">Rooms</NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
            } to="myBookings">My Bookings</NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
            } to="location">Location</NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
            } to="faq">FAQ</NavLink>

            <button className="btn btn-error btn-sm">Logout</button>


        </div>
    );
};

export default NavbarItems;