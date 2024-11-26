import React from 'react';
import Icon from './Icons';
import footerLogo from '../assets/images/webp/footer-logo.webp';
import { FOOTER_DATA }  from '../utils/Helper'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='flex flex-col justify-center items-center'>
            <a className='sm:max-w-[183px] max-w-[100px]' href="/">
                <img src={footerLogo} alt="footer-logo" />
            </a>
            <div className='flex justify-center gap-6 sm:pt-7 pt-4'>
                {FOOTER_DATA.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition duration-300 transform hover:scale-105">
                        <Icon iconName={link.name} />
                    </a>
                ))}
            </div>
            <div className='pt-7 md:pb-[60px] pb-12'>
                <p className="text-custom2xl leading-8 font-normal text-white font-oswald text-center">
                    Copyright © Kaijuu Crew {currentYear}
                </p>
            </div>
        </div>
    );
};

export default Footer;
