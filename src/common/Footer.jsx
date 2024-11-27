import React from 'react';
import Icon from './Icons';
import footerLogo from '../assets/images/webp/footer-logo.webp';
import { FOOTER_DATA } from '../utils/Helper';
import BackToTop from '../components/BackToTop';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex flex-col justify-center items-center xl:pt-[72px]">
            <a className="sm:max-w-[183px] max-w-[100px]" href="/">
                <img src={footerLogo} alt="footer-logo" />
            </a>
            <div className="flex justify-center gap-6 sm:pt-8 pt-4">
                {FOOTER_DATA.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition duration-300 transform hover:scale-105">
                        <Icon
                            className={`${index === 0
                                    ? 'md:size-[41px] size-[28px]'
                                    : index === 1
                                        ? 'md:w-[51px] md:h-[41] w-10 h-8'
                                        : index === 2
                                            ? 'md:size-[41px] size-[28px]'
                                            : index === 3
                                                ? 'md:size-[41px] size-[28px]'
                                                : 'md:size-[35px] size-[24px]' 
                                }`}
                            iconName={link.name}
                        />
                    </a>
                ))}
            </div>
            <div className="sm:pt-7 pt-4 md:pb-[60px] sm:pb-12 pb-10">
                <p className="sm:text-custom2xl text-lg leading-8 font-normal text-white font-oswald text-center">
                    Copyright © Kaijuu Crew {currentYear}
                </p>
            </div>
            <BackToTop />
        </div>
    );
};

export default Footer;
