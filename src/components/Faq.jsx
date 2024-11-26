import React, { useState } from 'react';
import CommonHeading from '../common/CommonHeading';
import { ACCORDION_ITEMS } from '../utils/Helper';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0); 

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-faq bg-cover bg-no-repeat bg-center -mt-[1px]">
            <div className="container lg:pt-[106px] md:pt-20 sm:pt-14 pt-12 lg:pb-[120px] md:pb-20 sm:pb-14 pb-12">
                <CommonHeading
                    className="text-center"
                    text={
                        <>
                            <span className="text-red">FAQ</span>
                            <span className="text-white text-3xl lg:text-custom-5xl lg:leading-custom-2xl">s</span>
                        </>
                    }/>
                <div className="lg:mt-14 sm:mt-12 mt-8 max-w-[830px] mx-auto">
                    {ACCORDION_ITEMS.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-border faq-bg mb-4 backdrop-blur-[35px] transition-all duration-500 ${activeIndex === index
                                    ? ''
                                : ''}`}>
                            <button 
                                onClick={() => toggleAccordion(index)}
                                className={`flex items-center justify-between w-full text-left text-white text-lg sm:text-2xl leading-custom-xl font-extrabold p-4 sm:p-6 ${activeIndex === index ? 'pt-6 pb-2' : ''
                                    }`}
                            >
                                <span>{item.title}</span>
                                <svg className={`w-5 h-5 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-0' : 'rotate-180'
                                    }`} width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.63729 8L5.5 3.17708L1.36271 8L0 6.41146L5.5 0L11 6.41146L9.63729 8Z" fill="white" />
                                </svg>
                            </button>
                            {activeIndex === index && (
                                <div
                                    className="ps-4 sm:ps-6 pt-3 pb-4 text-white opacity-60 transition-opacity duration-300"
                                    style={{ maxHeight: '300px', overflow: 'hidden' }}
                                >
                                    {item.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
