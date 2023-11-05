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

            <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="btn btn-error btn-sm">Log Out</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>


        </div>
    );
};

export default NavbarItems;