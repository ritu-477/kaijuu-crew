import React, { useEffect, useState, useRef } from 'react';
import navLogo from '../assets/images/webp/nav-logo.webp';
import { NAV_DATA_LINK } from '../utils/Helper';    
import flagImg from '../assets/images/svg/flag-image.svg'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !menuRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                document.body.style.overflow = isMenuOpen ? "hidden" : "";
            } else {
                document.body.style.overflow = "";
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("resize", handleResize);
            document.body.style.overflow = "";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className="md:h-[98px] sm:h-16 h-20 flex w-full flex-col mx-auto items-center bg-jet-black py-8 sm:pt-9 sm:pb-[26px] relative z-20">
            <div className='container'>
                <div className='flex justify-between items-center'>
                        <a href="/"><img src={navLogo} alt="nav-logo" className='md:max-w-[177.26px] max-w-[130px]' /></a>
                        <div className={`menuList ${isMenuOpen ? 'max-lg:left-0' : 'max-lg:left-[-100%]'} z-10 gap-6 max-lg:w-full max-lg:fixed max-lg:justify-center max-lg:top-0 max-lg:bg-black max-lg:transition-all duration-300 flex items-center max-lg:min-h-screen`} ref={menuRef}>
                            <ul className='flex flex-col lg:flex-row lg:gap-[53px] gap-7 items-center lg:items-center z-10'>
                                {NAV_DATA_LINK.map((link, index) => (
                                    <li key={index} onClick={toggleMenu}>
                                        <a target='blank' className='font-normal font-oswald text-white lg:text-custom2xl lg:leading-8 text-lg relative after:absolute hover:text-red ease-in-out duration-300' href={link.href}>
                                            {link.label}</a>
                                    </li>
                                ))}
                                <li className="relative">
                                    <a onClick={toggleDropdown} className='font-normal font-oswald gap-1 relative text-white lg:text-custom2xl lg:leading-8 text-lg flex items-center space-x-1 cursor-pointer after:absolute hover:text-red ease-in-out duration-300' href="#"><img className='mr-2'src={flagImg} alt="flag-image" /> ENG
                                        <span>
                                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}><path
                                                d="M11.8027 6.20992C11.6712 6.06997 11.5037 6 11.3004 6C11.0972 6 10.9297 6.06997 10.7982 6.20992L8 9.18702L5.20179 6.20992C5.07025 6.06997 4.90284 6 4.69955 6C4.49626 6 4.32885 6.06997 4.19731 6.20992C4.06577 6.34987 4 6.52799 4 6.74427C4 6.96056 4.06577 7.13867 4.19731 7.27862L7.49776 10.7901C7.56951 10.8664 7.64723 10.9206 7.73094 10.9527C7.81465 10.9847 7.90433 11.0005 8 11C8.09566 11 8.18535 10.984 8.26906 10.9519C8.35277 10.9198 8.43049 10.8659 8.50224 10.7901L11.8027 7.27862C11.9342 7.13867 12 6.96056 12 6.74427C12 6.52799 11.9342 6.34987 11.8027 6.20992Z"
                                                fill="white" className='2xl:fill-vibrantBlue' /></svg>
                                        </span>
                                        {isDropdownOpen && (
                                            <span className="absolute w-[150px] left-0 top-3 px-2 pt-[14px] pb-2 mt-7 bg-charcoal-black border-white rounded-xl z-30" ref={dropdownRef}>
                                                <span className="block px-1 text-center py-2 lg:text-lg max-w-[171.94px] leading-custom-lg text-base text-white hover:bg-black rounded-lg">
                                                    About Us
                                                </span>
                                            <span className="block px-1  text-center py-2 lg:text-lg max-w-[171.94px] leading-custom-lg text-base text-white hover:bg-black rounded-lg">
                                                    Story
                                                </span>
                                            <span className="block px-1  text-center py-2 lg:text-lg max-w-[171.94px] leading-custom-lg text-base text-white hover:bg-black rounded-lg">
                                                   Traits
                                                </span>
                                            <span className="block px-1  text-center lg:text-lg py-[10.5px] max-w-[171.94px] leading-custom-lg text-white hover:bg-black rounded-lg">
                                                  Team
                                                </span>
                                            </span>)}
                                    </a>
                                </li>
                            </ul>
                    </div>
                    <div
                        onClick={toggleMenu}
                        className='menuIcon relative max-sm:w-[30px] max-sm:h-[24px] max-lg:w-[38px] max-lg:h-[28px] z-[15] max-lg:flex max-lg:justify-between max-lg:flex-col max-lg:cursor-pointer transition ease-linear duration-300 lg:hidden'>
                        {isMenuOpen ? (
                            <>
                                <span className="h-[4px] absolute top-3 w-full bg-white transform rotate-45 transition duration-300"></span>
                                <span className="h-[4px] absolute top-3 w-full bg-white transform -rotate-45 transition duration-300"></span>
                            </>
                        ) : (
                            <>
                                <span className="h-[4px] w-full bg-white"></span>
                                <span className="h-[4px] w-full bg-white"></span>
                                <span className="h-[4px] w-full bg-white"></span>
                            </>
                        )}
                    </div>
                    </div>
                   
            </div>
            <div className='w-full linear-border mt-4'></div>
        </div>
    );
};

export default Header;