import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { isUrl } from "check-valid-url";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then()
            .catch()
        toast.success(`Successfully Logout`);
    }
    const navLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        {
            user
                ? <>
                    <li><NavLink to={"/update-profile"}>Update Profile</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                </>
                : <></>
        }
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost text-xl">UrbanDwell</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user
                        ? <div>
                            <div className="tooltip tooltip-bottom mr-4" data-tip={user?.displayName}>
                                <img src={isUrl(user?.photoURL) ? user?.photoURL : "https://i.ibb.co/XDrnjqc/image.png"} className="btn rounded-box"></img>
                            </div>
                            <a onClick={handleLogout} className="btn">Logout</a>
                        </div>
                        : <Link to={"/login"} className="btn">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;