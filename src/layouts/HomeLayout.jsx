import { Outlet } from "react-router";
import Header from "../components/Header";
import LastestNews from "../components/LastestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section>
                    <LastestNews></LastestNews>
                </section>
                <nav className="w-11/12 mx-auto">
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                <section className="left_nav"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right_nav"></section>
            </main>
        </div>
    );
};

export default HomeLayout;