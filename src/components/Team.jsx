import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css/pagination";
import CommonHeading from '../common/CommonHeading';
import { TEAM_DATA } from '../utils/Helper';
import prevButton from '../assets/images/svg/vector-one.svg';
import nextButton from '../assets/images/svg/vector-two.svg';

const Team = () => {
    return (
        <div className="bg-charcoal-black lg:pt-[76px] md:pt-14 pt-6 lg:pb-20 xl:pb-[123px] md:pb-20 sm:pb-14 pb-6 -mt-1" id="team">
            <div className="container">
                <CommonHeading className="text-center !text-red" text={'Team'} />
                <div className="lg:mt-14 md:mt-12 mt-6 relative">
                    <button
                        className="absolute swiper-button-prev top-1/2 3xl:-left-6 lg:-left-5 -left-1 z-10">
                        <img
                            className="2xl:w-[74px] cursor-pointer 2xl:h-[23px] lg:w-12 lg:h-4 w-6 h-3 z-10"
                            src={prevButton}
                            alt="prev-button"
                        />
                    </button>
                    <button
                        className="absolute swiper-button-next cursor-pointer top-[45%] 3xl:-right-6 lg:-right-5 -right-1 z-10">
                        <img
                            className="2xl:w-[74px] 2xl:h-[23px] lg:w-12 lg:h-4 w-6 h-3 z-10"
                            src={nextButton}
                            alt="next-button"
                        />
                    </button>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            el: '.custom-pagination',
                            clickable: true,
                            renderBullet: (index, className) =>
                                `<span class="${className} custom-bullet"></span>`,
                        }}
                        className="team-swiper"
                    >
                        {TEAM_DATA.map((member, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center">
                                    <img
                                        className="max-w-[450px] w-full"
                                        src={member.img}
                                        alt={`team-${index}`}
                                    />
                                    <p className="lg:text-4xl md:text-3xl text-2xl lg:leading-custom-4xl text-white font-righteous">
                                        {member.name}
                                    </p>
                                    <p className="sm:text-lg text-base text-white sm:leading-lg font-righteous pt-2">
                                        {member.id}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='mt-6 lg:mt-8'>
                        <div className="custom-pagination flex justify-center"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
