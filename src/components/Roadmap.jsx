import React from 'react'
import CommonHeading from '../common/CommonHeading'
import phaseOne from '../assets/images/webp/phase-one.png'
import phaseTwo from '../assets/images/webp/phase-2.png'
import phaseThree from '../assets/images/webp/phase-three.png'

const Roadmap = () => {
    return (
        <div className='bg-ink-black lg:pt-[89px] md:pt-16 sm:pt-14 pt-12 lg:pb-[86px] md:pb-16 sm:pb-14 pb-12 -mt-[2px]'>
            <div className='container'>
                <CommonHeading className="text-center !text-red" text={'Roadmap'} />
                <div className='max-w-[1320px] mx-auto relative lg:mb-[250px] md:mb-16 sm:mb-14 mb-12'>
                    <div className='flex flex-wrap -mx-3 flex-row lg:pt-24 md:pt-20 sm:pt-14 pt-10 justify-center'>
                        <div className='w-1/3'>
                            <div className='flex flex-col'>
                                <div className='flex gap-2 items-center'>
                                    <span className='w-1 h-1 bg-white rounded-full'></span>
                                    <p className='text-custom2xl leading-8 font-oswald font-normal text-white'>Ut eu ac sed duis nec amet.</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <span className='w-1 h-1 bg-white rounded-full'></span>
                                    <p className='text-custom2xl leading-8 font-oswald font-normal text-white'>Sed elementum a tortor eros.</p>
                                </div>
                            </div>
                            <div className='relative max-w-[300px] mt-5'>
                                <img className='max-w-[300px]' src={phaseOne} alt="phase-one" />
                                <p className='text-white font-normal font-oswald absolute top-20 left-12 text-custom-5xl leading-custom-6xl'>Phase-1</p>
                            </div>
                        </div>
                        <div className='w-1/3 flex flex-col items-center justify-center'>
                            <div className='flex flex-col'>
                                <div className='flex gap-2 items-center'>
                                    <span className='w-1 h-1 bg-white rounded-full'></span>
                                    <p className='text-custom2xl leading-8 font-oswald font-normal text-white'>Adipiscing velit turpis pretium, tellus.</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <span className='w-1 h-1 bg-white rounded-full'></span>
                                    <p className='text-custom2xl leading-8 font-oswald font-normal text-white'>Ornare urna arcu, dolor vestibulum.</p>
                                </div>
                            </div>
                            <div className='relative max-w-[300px] mt-5'>
                                <img className='max-w-300px]' src={phaseOne} alt="phase-one" />
                                <p className='text-white font-normal font-oswald absolute top-20 left-12 text-custom-5xl leading-custom-6xl'>Phase-1</p>
                            </div>
                        </div>
                        <div className='w-1/3 flex-col flex items-center justify-center'>
                            <div className='flex gap-2'>
                                <span className='w-1 h-1 bg-white rounded-full mt-4'></span>
                                <p className='text-custom2xl leading-8 font-oswald font-normal text-white max-w-[216px]'>Elementum elementum sit mauris amet non.</p>
                            </div>
                            <div className='relative max-w-[300px] mt-5'>
                                <img className='max-w-[220px]' src={phaseThree} alt="phase-one" />
                                <p className='text-white font-normal font-oswald absolute top-20 left-12 text-custom-5xl leading-custom-6xl'>Phase-1</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap -mx-3 flex-row justify-center'>
                        <div className='w-1/3 flex-col flex absolute left-[19%] top-[84%]'>
                            <div className='relative max-w-[300px]'>
                                <img className='max-w-[300px]' src={phaseTwo} alt="phase-one" />
                                <p className='text-white font-normal font-oswald absolute top-20 left-12 text-custom-5xl leading-custom-6xl'>Phase-1</p>
                            </div>
                            <div className='flex gap-2'>
                                <span className='w-1 h-1 bg-white rounded-full mt-4'></span>
                                <p className='text-custom2xl leading-8 font-oswald font-normal text-white max-w-[216px]'>Elementum elementum sit mauris amet non.</p>
                            </div>
                        </div>
                        <div className='w-1/3 flex-col flex items-center justify-center absolute right-[11%] top-[85%]'>
                            <div className='relative max-w-[300px]'>
                                <img className='max-w-[300px]' src={phaseTwo} alt="phase-one" />
                                <p className='text-white font-normal font-oswald absolute top-20 left-12 text-custom-5xl leading-custom-6xl'>Phase-1</p>
                            </div>
                            <div className='flex gap-2'>
                                <span className='w-1 h-1 bg-white rounded-full mt-4'></span>
                                <p className='text-custom2xl leading-8 font-oswald font-normal text-white max-w-[216px]'>Elementum elementum sit mauris amet non.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Roadmap