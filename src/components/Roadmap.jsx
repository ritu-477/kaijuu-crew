import React from 'react'
import CommonHeading from '../common/CommonHeading'
import { ROADMAP_DATA } from '../utils/Helper'
import phaseOne from '../assets/images/webp/phase-one.webp'
import phaseTwo from '../assets/images/webp/phase-two.webp'
import phaseFour from '../assets/images/webp/phase-2.webp'
import phaseThree from '../assets/images/webp/phase-three.webp'
import ellipseONE from '../assets/images/webp/roadmap-ellipse-one.webp'
import ellipseTwo from '../assets/images/webp/roadmap-image-two.webp'

const Roadmap = () => {
    return (
        <div className='bg-charcoal-black lg:pt-[89px] md:pt-16 sm:pt-14 pt-12 lg:pb-[150px] md:pb-16 sm:pb-14 pb-6 -mt-[2px]' id='roadmap'>
            <div className='container'>
                <CommonHeading className="text-center !text-red" text={'Roadmap'} />
                <div className='xl:block hidden'>
                    <div className='max-w-[1320px] mx-auto relative lg:mb-[250px] md:mb-16 sm:mb-14 mb-12'>
                        <img className='absolute pointer-events-none top-[49%] xl:left-[15.6%] 2xl:left-[16%] max-w-[167px]' src={ellipseONE} alt="ellipse-one" />
                        <img className='absolute pointer-events-none top-[50%] left-[28.5%] max-w-[167px]' src={ellipseTwo} alt="ellipse-one" />
                        <img className='absolute pointer-events-none top-[49%] right-[28.5%] max-w-[167px]' src={ellipseONE} alt="ellipse-one" />
                        <img className='absolute pointer-events-none top-[50%] xl:right-[15.6%] 2xl:right-[16%] max-w-[167px]' src={ellipseTwo} alt="ellipse-one" />
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
                                    <img className='max-w-[300px] pointer-events-none' src={phaseOne} alt="phase-one" />
                                    <p className='text-white font-normal font-oswald absolute top-32 left-16 text-custom-5xl leading-custom-6xl'>Phase-1</p>
                                </div>
                            </div>
                            <div className='w-1/3 flex flex-col items-center justify-center ps-9'>
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
                                    <img className='max-w-300px] pointer-events-none' src={phaseTwo} alt="phase-one" />
                                    <p className='text-white font-normal font-oswald absolute top-[120px] left-16 text-custom-5xl leading-custom-6xl'>Phase-3</p>
                                </div>
                            </div>
                            <div className='w-1/3 flex-col flex items-center ps-[175px]'>
                                <div className='flex gap-2'>
                                    <span className='w-1 h-1 bg-white rounded-full mt-4'></span>
                                    <p className='text-custom2xl leading-8 font-oswald font-normal text-white max-w-[216px]'>Elementum elementum sit mauris amet non.</p>
                                </div>
                                <div className='relative max-w-[300px] mt-5'>
                                    <img className='max-w-[220px] pointer-events-none' src={phaseThree} alt="phase-one" />
                                    <p className='text-white font-normal font-oswald absolute top-[120px] left-16 text-custom-5xl leading-custom-6xl'>Phase-5</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-wrap -mx-3 flex-row justify-center'>
                            <div className='w-1/3 flex-col flex absolute left-[19%] top-[76%]'>
                                <div className='relative max-w-[300px]'>
                                    <img className='max-w-[300px] pointer-events-none' src={phaseFour} alt="phase-one" />
                                    <p className='text-white font-normal font-oswald absolute top-[120px] left-16 text-custom-5xl leading-custom-6xl'>Phase-2</p>
                                </div>
                                <div className='flex gap-2'>
                                    <span className='w-1 h-1 bg-white rounded-full mt-4'></span>
                                    <p className='text-custom2xl leading-8 font-oswald font-normal text-white max-w-[342px]'>Sagittis tristique molestie eu pharetra.</p>
                                </div>
                                <div className='flex gap-2'>
                                    <span className='w-1 h-1 bg-white rounded-full mt-4'></span>
                                    <p className='text-custom2xl leading-8 font-oswald font-normal text-white max-w-[367px]'>Nibh convallis ornare fringilla diam proin volutpat aliquet nunc.</p>
                                </div>
                            </div>
                            <div className='w-1/3 flex-col flex items-center justify-center absolute right-[11%] top-[73%]'>
                                <div className='relative max-w-[300px]'>
                                    <img className='max-w-[300px] pointer-events-none' src={phaseFour} alt="phase-one" />
                                    <p className='text-white font-normal font-oswald absolute top-[120px] left-16 text-custom-5xl leading-custom-6xl'>Phase-4</p>
                                </div>
                                <div className='flex gap-2 ps-7'>
                                    <span className='w-1 h-1 bg-white rounded-full mt-4'></span>
                                    <p className='text-custom2xl leading-8 font-oswald font-normal text-nowrap text-white max-w-[481px]'>Eget imperdiet mauris interdum ut egestas lacinia lacus.</p>
                                </div>
                                <div className='flex gap-2 pr-12'>
                                    <span className='w-1 h-1 bg-white rounded-full mt-4'></span>
                                    <p className='text-custom2xl leading-8 font-oswald font-normal text-white max-w-[367px]'>Non ipsum, cursus consectetur fringilla aliquam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='xl:hidden block lg:mt-10 md:mt-7 mt-5'>
                    {ROADMAP_DATA.map((phase) => (
                        <div key={phase.id} className='relative flex gap-5 items-center'>
                            <img className='md:max-w-[200px] pointer-events-none md:h-[200px] max-w-[100px] h-[100px]' src={phase.image} alt={`${phase.title} image`} />
                            <p className='text-white font-normal font-oswald absolute top-7 left-4 md:top-[66px] md:left-10 text-base md:text-3xl'>
                                {phase.title}</p>
                            <div className='flex flex-col gap-1'>
                                {phase.points.map((point, index) => (
                                    <div key={index} className='flex gap-2 items-center'>
                                        <span className='w-1 h-1 bg-white rounded-full'></span>
                                        <p className='md:text-custom2xl md:leading-8 text-sm font-oswald font-normal text-white'>
                                            {point} </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Roadmap