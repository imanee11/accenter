import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

import image from "../../constants/image";



const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav
                className={`nav flex items-center justify-between px-[5vw] py-4 fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                    isScrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
            >
                {/* Left Section */}
                <div className="flex items-center space-x-[4vw]">
                    <img
                        src={image.logo2}
                        alt="Logo"
                        className="lg:w-[4vw] md:w-[7vw] w-[15vw]"
                    />
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8 font-baloo">
                        <li className={`font-semibold text-[15px]  hover:text-secondary transition duration-300 cursor-pointer ${
                            isScrolled ? "text-likeblack" : "text-white"
                        }`}
                        >
                            <a href="#home">Accueil</a>
                        </li>
                        <li className={`font-semibold text-[15px]  hover:text-secondary transition duration-300 cursor-pointer ${
                            isScrolled ? "text-likeblack" : "text-white"
                        }`}
                        >                            
                            <a href="#about">À propos</a>
                        </li>
                        <li className={`font-semibold text-[15px]  hover:text-secondary transition duration-300 cursor-pointer ${
                            isScrolled ? "text-likeblack" : "text-white"
                        }`}
                        >                           
                            <a href="#services">Services</a>
                        </li>
                        <li className={`font-semibold text-[15px]  hover:text-secondary transition duration-300 cursor-pointer ${
                            isScrolled ? "text-likeblack" : "text-white"
                        }`}
                        >
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    <button className="hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-secondary  text-likeblack px-5 py-[2vh] rounded-full font-semibold text-[14px] overflow-hidden group transition duration-300">
                        <span className="">
                            <a
                                href="tel:+212745026956"
                                className="flex gap-2 items-center font-baloo"
                            >
                                <FaPhone size={14} />
                                <span className="hidden lg:block">06 74 50 26 95</span>
                            </a>
                        </span>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-likeblack transition duration-300"
                    >
                        {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`side fixed top-0 right-0 h-screen w-[75%] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="absolute top-4 right-4 text-black hover:text-primary transition duration-300"
                >
                    <FaTimes size={24} />
                </button>

                {/* Mobile Menu Links */}
                <div className="flex flex-col space-y-6 pt-16 px-6">
                    <a
                        href="#home"
                        className="flex items-center gap-5 text-[18px] font-semibold text-likeblack hover:text-primary transition duration-300"
                    >
                        Accueil
                    </a>
                    <a
                        href="#about"
                        className="flex items-center gap-5 text-[18px] font-semibold text-likeblack hover:text-primary transition duration-300"
                    >
                        À propos
                    </a>
                    <a
                        href="#services"
                        className="flex items-center gap-5 text-[18px] font-semibold text-likeblack hover:text-primary transition duration-300"
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center gap-5 text-[18px] font-semibold text-likeblack hover:text-primary transition duration-300"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </>
    );
};

export default NavBar;
