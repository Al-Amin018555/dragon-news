import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <div className="bg-base-200 min-h-screen">
            <header className="py-5 w-11/12 mx-auto">
                <Navbar></Navbar>
            </header>
            <main className="w-11/12 mx-auto min-h-screen">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;