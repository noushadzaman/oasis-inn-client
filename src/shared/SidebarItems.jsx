import { NavLink } from 'react-router-dom';

const SidebarItems = () => {
    return (
        <div className="flex flex-col gap-2">
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
        </div>
    );
};

export default SidebarItems;