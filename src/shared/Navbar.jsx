import { Link, NavLink } from "react-router-dom";
import NavbarItems from './NavbarItems';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2';


const Navbar = () => {
    const { loading, user, logOut } = useContext(AuthContext);
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: "error",
                    title: "Log out successful.",
                });
            })
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
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10000000] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink className={({ isActive }) =>
                                isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                            } to="rooms">Rooms</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                            } to="myBookings">My Bookings</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                            } to="gallery">Gallery</NavLink>
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
                        loading ?
                            <span className="loading loading-spinner loading-lg"></span> :
                            <div>
                                {
                                    user?.email ?
                                        <div className="dropdown dropdown-end">
                                            <label tabIndex={0} className="m-1">
                                                <div className="avatar">
                                                    <div className="w-12 rounded-full">
                                                        <img src={user.photoURL} />
                                                    </div>
                                                </div>
                                            </label>
                                            <div tabIndex={0} className="dropdown-content z-[100000] menu p-2 shadow bg-base-100 rounded-box  flex flex-col items-center justify-center py-5 px-3">
                                                <p className="text-xl text-center font-semibold">{user.displayName}</p>
                                                <p className="text-center mt-1">{user.email}</p>
                                                <button
                                                    onClick={handleLogOut}
                                                    className="btn btn-primary mt-4">Log out</button>
                                            </div>
                                        </div> :

                                        !loading && !user?.email &&
                                        <Link to="/login" className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Login</Link>
                                }
                            </div>
                    }
                </div>
            </div >
        </div >

    );
};

export default Navbar;