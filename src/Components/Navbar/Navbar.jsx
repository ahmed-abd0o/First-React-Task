import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    const [scroll, setScroll] = useState(false);

    // console.log(document.body.scrollTop || document.documentElement.scrollTop)
    document.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    });
    const location = useLocation();
    return (
        <div
            className={`p-4 fixed left-0 right-0 top-0 z-10 bg-slate-500 text-white font-bold ${
                scroll ? "py-4" : "py-8"
            } transition-all duration-300`}
        >
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link to={""} className="text-4xl">
                        START FRAMEWORK
                    </Link>
                </div>
                <ul className=" group  text-xl space-x-2 flex list-none">
                    <li>
                        <Link
                            className={`hover:text-stone-300 ${
                                location.pathname === "/about" ? "active" : ""
                            }`}
                            to={"about"}
                        >
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`hover:text-stone-300 ${
                                location.pathname === "/portfolio"
                                    ? "active"
                                    : ""
                            }`}
                            to={"portfolio"}
                        >
                            PORTFOLIO
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`hover:text-stone-300 ${
                                location.pathname === "/contact" ? "active" : ""
                            }`}
                            to={"contact"}
                        >
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
