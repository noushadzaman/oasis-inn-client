import { Link, NavLink } from "react-router-dom";
import NavbarItems from './NavbarItems';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { loading, user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }
    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink className={({ isActive }) =>
                                isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                            } to="rooms">Rooms</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                            } to="gallery">Gallery</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                            } to="myBookings">My Bookings</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                            } to="location">Location</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                            } to="faq">FAQ</NavLink>
                        </ul>
                    </div>
                    <NavLink to='/' className="btn btn-ghost normal-case text-xl">OASIS INN</NavLink>



                </div>
                <div className="navbar-center hidden lg:flex">

                    <NavbarItems></NavbarItems>

                </div>
                <div className="navbar-end">
                    {
                        user?.email && !loading ?
                            <div className="dropdown dropdown-left max-h-[40px] m-0 p-0">
                                <label tabIndex={0} className="m-1">
                                    <div className="avatar">
                                        <div className="h-[50px] pt-0 rounded-full">
                                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                        </div>
                                        <h1>Name</h1>
                                    </div>
                                </label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 ">
                                    <button
                                        onClick={handleLogOut}>Log out</button>
                                </ul>
                            </div>
                            :
                            <Link to="/login" className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Login</Link>
                    }
                </div>
            </div >
        </div >

    );
};

export default Navbar;