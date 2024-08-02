import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";


export default function Layout() {

    return (
        <>
            <Navbar/>
            <div className="mt-16">
                <Outlet/>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}
