import React from 'react'
import CommonHeading from '../common/CommonHeading'
import { CREW_DATA } from '../utils/Helper'

const KaijuuCrewClasses = () => {
    return (
        <div className="bg-kaijuu bg-cover bg-no-repeat bg-center xl:pt-[171px] lg:pt-28 md:pt-20 sm:pt-16 pt-12 md:pb-36 sm:pb-28 pb-12 lg:pb-32 xl:pb-56 -mt-1">
            <CommonHeading
                className="text-center"
                text={
                    <>
                        <span className="text-red">Kaijuu</span>{' '}
                        <span className="text-white">Crew Classes</span>
                    </>
                }
            />
            <div className="max-w-[1814px] px-5 mx-auto lg:mt-[85px] sm:mt-14 md:mt-16 mt-10">
                <div className="flex xl:justify-between justify-center gap-5 flex-wrap">
                    {CREW_DATA.map((crew, index) => (
                        <div key={index} className="flex flex-col transition duration-300 hover:scale-110">
                            <img
                                src={crew.img}
                                className="max-w-[254px] pointer-events-none rounded-[20px] w-full"
                                alt={`${crew.title.toLowerCase()}-image`}
                            />
                            <p className="font-semibold text-2xl lg:text-4xl leading pt-4 lg:pt-[18px] text-white text-center font-oswald">
                                {crew.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default KaijuuCrewClasses