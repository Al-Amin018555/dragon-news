import { Outlet } from "react-router";
import Header from "../components/Header";
import LastestNews from "../components/LastestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayout/LeftAside";
import RightAside from "../components/homeLayout/RightAside";

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
            <main className="w-11/12 mx-auto grid gap-5 grid-cols-12 my-5">
                <aside className="col-span-3 sticky top-0 h-fit">
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3 sticky top-0 h-fit">
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;