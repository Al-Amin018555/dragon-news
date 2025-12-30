import { Link, NavLink } from "react-router";
import userIcon from '../assets/user.png'
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {

    const { user, logOut } = use(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert("You have succesfully logged out");
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div className="flex items-center justify-between">
            <div>
                {user && user.email}
            </div>
            <div className="nav flex text-accent gap-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex items-center gap-4">
                <img className="w-12 rounded-full" src={user ? user.photoURL : userIcon} alt="" />
                {
                    user ? <button onClick={handleLogOut} className="btn btn-primary px-10">Log Out</button> : <Link to="/auth/login" className="btn btn-primary px-10">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;