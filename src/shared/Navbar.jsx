import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { loading, user, logOut } = useContext(AuthContext);

    const navItems = <>
        <NavLink className={({ isActive }) =>
            isActive ? 'nav-a mr-5 font-semibold before:w-[100%]' : 'nav-a mr-5 font-semibold'
        } to="rooms">Rooms</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? 'nav-a mr-5 font-semibold before:w-[100%]' : 'nav-a mr-5 font-semibold'
        } to="myBookings">My Bookings</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? 'nav-a mr-5 font-semibold before:w-[100%]' : 'nav-a mr-5 font-semibold'
        } to="gallery">Gallery</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? 'nav-a mr-5 font-semibold before:w-[100%]' : 'nav-a mr-5 font-semibold'
        } to="location">Location</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? 'nav-a mr-5 font-semibold before:w-[100%]' : 'nav-a mr-5 font-semibold'
        } to="faq">FAQ</NavLink>

    </>

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
        <div className="bg-[red]">
            <div className="drawer z-40">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-[#f1ebe3]">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <NavLink to='/' className="normal-case text-xl">OASIS INN</NavLink>
                        </div>
                        <div className="flex-none hidden lg:block">
                            {
                                navItems
                            }
                        </div>
                        <div className="lg:ml-[200px] xl:ml-[300px] 2xl:ml-[450px]">
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
                                                <Link to="/login" className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10 button-primari">Login</Link>
                                        }
                                    </div>
                            }
                        </div>
                    </div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {
                            navItems
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;