import React from "react";
import { Link } from "react-router-dom";
import SVGs from "./SVGs";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 z-50 w-screen h-20 flex justify-between items-center px-36 bg-white shadow-md">
            <div className="flex flex-row justify-between h-16 items-center w-full">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="#" className="flex items-center">
                        <SVGs.LogoText width={120}/>
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8">
                    <a
                        href="#"
                        className="text-cust-dark-blue text-md font-medium"
                    >
                        Tentang kami
                    </a>
                    <a
                        href="#"
                        className="text-cust-dark-blue text-md font-medium"
                    >
                        Pemodal
                    </a>
                    <a
                        href="#"
                        className="text-cust-dark-blue text-md font-medium"
                    >
                        Perintis
                    </a>
                </div>

                {/* Login and CTA Button */}
                <div className="flex items-center space-x-4">
                    <a
                        href="#"
                        className="text-cust-dark-blue text-md font-medium"
                    >
                        Masuk
                    </a>
                    <a
                        href="#"
                        className="bg-cust-pale-yellow text-cust-dark-blue px-4 py-2 rounded-full text-md font-medium flex items-center gap-3"
                    >
                        Coba Sekarang
                        <SVGs.Arrow/>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
