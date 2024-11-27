import React, { useState, useEffect } from 'react';
import CommonPara from '../common/CommonPara';
import heroImg from '../assets/images/webp/hero-image.webp'
import Cartoon from './Cartoon';
import Header from '../common/Header';

const Hero = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 10,
        hours: 20,
        minutes: 15,
        seconds: 10,
    });

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimeLeft((prevTime) => {
                const { days, hours, minutes, seconds } = prevTime;

                let newSeconds = seconds - 1;
                let newMinutes = minutes;
                let newHours = hours;
                let newDays = days;

                if (newSeconds < 0) {
                    newSeconds = 59;
                    newMinutes--;
                }
                if (newMinutes < 0) {
                    newMinutes = 59;
                    newHours--;
                }
                if (newHours < 0) {
                    newHours = 23;
                    newDays--;
                }

                if (newDays < 0) {
                    clearInterval(countdown);
                    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
                }

                return { days: newDays, hours: newHours, minutes: newMinutes, seconds: newSeconds };
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    return (
        <div className="bg-hero bg-cover bg-no-repeat bg-center -mt-[1px]">
            <Header/>
            <div className="container pt-[55px]">
                <div className="flex flex-row justify-between flex-wrap -mx-3">
                    <div className="lg:w-1/3 w-full px-3">
                        <h1 className="font-normal lg:text-start text-center md:text-9xl text-5xl sm:text-7xl lg:text-custom-9xl text-white lg:leading-custom-9xl font-godzilla lg:max-w-[456px]">
                            <span className="text-red">Kaijuu</span>
                           <span className='lg:block'></span>
                            Crew</h1>
                        <CommonPara
                            className="lg:max-w-[325px] w-full pt-[18px] lg:text-start text-center"
                            text={`The ocean surges with spray and foam, As Kaijuu rise from depth to roam.
                                Thirty-three hundred, and thirty-three more, Decked in garbs from days of yore.
                                       We scour the earth and sea and air,Our mission so grave few would dare.In search of untold wealth to hoard?
                                          Nay, but 'cause your Apes are Bored.`}
                        />
                        <div className="flex flex-col py-[18px] max-lg:items-center">
                            <p className="font-bold text-white font-oswald text-3xl sm:text-4xl sm:leading-custom-5xl lg:text-5xl lg:leading-custom-8xl">
                                {formatTime(timeLeft.days)}:{formatTime(timeLeft.hours)}:
                                {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                            </p>
                            <p className="font-oswald font-normal text-lg text-white opacity-60">Days left</p>
                        </div>
                        <div className='flex gap-3 sm:gap-4 max-lg:justify-center'>
                            <button className='py-3 max-w-[210px] w-full sm:px-8 px-4 group whitespace-nowrap bg-red hover:bg-white transition duration-300 rounded-lg'><a className='text-white font-oswald transition duration-300 lg:text-lg text-base font-bold group-hover:text-red flex items-center gap-3' href=""><svg className='group-hover:fill-red fill-white' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_67_195)">
                                    <path d="M18.6246 3.99704C17.1981 3.34235 15.6928 2.8751 14.1462 2.60691C14.1322 2.60455 14.1178 2.60659 14.105 2.61275C14.0922 2.6189 14.0816 2.62887 14.0747 2.64129C13.8809 2.98504 13.6664 3.43466 13.5165 3.78666C11.8494 3.53367 10.1538 3.53367 8.48673 3.78666C8.31955 3.39454 8.13042 3.01214 7.92023 2.64129C7.91318 2.62901 7.90257 2.61915 7.88981 2.61302C7.87705 2.60688 7.86273 2.60475 7.84873 2.60691C6.30186 2.87366 4.79623 3.34116 3.37036 3.99704C3.35816 4.00169 3.34795 4.01044 3.34148 4.02179C0.489732 8.28291 -0.292643 12.4395 0.0909822 16.5439C0.0923572 16.5632 0.104732 16.5824 0.119857 16.5948C1.78048 17.8249 3.63792 18.7641 5.61298 19.3723C5.62693 19.3767 5.64191 19.3765 5.65576 19.3718C5.66961 19.3671 5.68159 19.3581 5.68998 19.3462C6.11348 18.7687 6.49023 18.1595 6.81473 17.5188C6.8215 17.5056 6.82381 17.4906 6.82133 17.4759C6.81886 17.4613 6.81172 17.4479 6.80098 17.4377C6.79388 17.431 6.78545 17.4258 6.77623 17.4225C6.18383 17.1949 5.61009 16.9213 5.06023 16.6044C5.04487 16.5957 5.03345 16.5814 5.02833 16.5645C5.02321 16.5476 5.02479 16.5294 5.03273 16.5137C5.03741 16.5034 5.04449 16.4945 5.05336 16.4875C5.16886 16.4009 5.28436 16.3102 5.39436 16.2194C5.40407 16.2116 5.41573 16.2066 5.42809 16.2049C5.44044 16.2032 5.45302 16.2049 5.46448 16.2098C9.06561 17.8543 12.9637 17.8543 16.5209 16.2098C16.5327 16.2046 16.5458 16.2028 16.5586 16.2045C16.5715 16.2062 16.5836 16.2114 16.5937 16.2194C16.7037 16.3102 16.8192 16.4009 16.9347 16.4875C16.9441 16.4944 16.9516 16.5034 16.9566 16.5139C16.9616 16.5243 16.964 16.5359 16.9634 16.5475C16.9629 16.559 16.9595 16.5703 16.9535 16.5802C16.9475 16.5902 16.9392 16.5985 16.9292 16.6044C16.3806 16.9242 15.8062 17.1974 15.2119 17.4212C15.2024 17.4246 15.1938 17.4301 15.1866 17.4372C15.1795 17.4443 15.174 17.4529 15.1706 17.4624C15.1674 17.4716 15.1662 17.4813 15.1669 17.491C15.1676 17.5007 15.1702 17.5102 15.1747 17.5188C15.5047 18.1582 15.8829 18.7687 16.2981 19.3462C16.3065 19.3581 16.3185 19.3671 16.3323 19.3718C16.3462 19.3765 16.3612 19.3767 16.3751 19.3723C18.3535 18.7659 20.2139 17.8267 21.8765 16.5948C21.8848 16.589 21.8917 16.5815 21.8967 16.5726C21.9017 16.5638 21.9047 16.554 21.9054 16.5439C22.3646 11.7988 21.1367 7.67654 18.6521 4.02316C18.6496 4.01713 18.6459 4.01169 18.6411 4.00719C18.6364 4.00269 18.6308 3.99923 18.6246 3.99704ZM7.35236 14.0442C6.26748 14.0442 5.37511 13.0487 5.37511 11.8277C5.37511 10.6053 6.25098 9.60979 7.35236 9.60979C8.46198 9.60979 9.34611 10.6135 9.32961 11.8277C9.32961 13.0487 8.45373 14.0442 7.35236 14.0442ZM14.6619 14.0442C13.5784 14.0442 12.6846 13.0487 12.6846 11.8277C12.6846 10.6053 13.5605 9.60979 14.6619 9.60979C15.7715 9.60979 16.657 10.6135 16.6391 11.8277C16.6391 13.0487 15.7715 14.0442 14.6619 14.0442Z" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_67_195">
                                        <rect width="22" height="22" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                                JOIN DISCORD</a></button>
                            <button className='py-3 max-w-[198px] w-full sm:px-8 px-4 font-oswald whitespace-nowrap bg-red hover:bg-white text-white transition duration-300 text-lg font-bold hover:text-red rounded-lg'>
                                CONNECT WALLET</button>
                        </div>
                    </div>
                    <div className='lg:w-1/2 flex flex-col items-end px-3 lg:mt-0 mt-5'>
                        <img className='max-w-[707px] w-full pointer-events-none' src={heroImg} alt="hero-image" />
                    </div>
                </div>
            </div>
            <Cartoon/>
        </div>
    );
};

export default Hero;