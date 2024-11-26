import React from 'react'
import traitsImg from '../assets/images/webp/traits-image.webp'
import CommonHeading from '../common/CommonHeading'

const Traits = () => {
  return (
      <div className='bg-traits max0lg:bg-cover lg:bg-[length:100%_100%] bg-no-repeat bg-center -mt-[1px]'>
          <div className='container lg:pt-24 md:pt-20 sm:pt-16 pt-12 xl:pb-[244px] lg:pb-56 md:pb-44 sm:pb-36 pb-24 '>
              <CommonHeading className="text-center !text-red" text={'Traits'} />
              <div className='flex flex-wrap -mx-3 lg:flex-row flex-col-reverse lg:mt-10 sm:mt-8 mt-6'>
                  <div className='lg:w-[54%] w-full px-3 flex max-lg:justify-center lg:mt-0 mt-5'>
                      <img className='max-w-[800px] w-full' src={traitsImg} alt="traits-image" />
                  </div>
                  <div className='lg:w-[45%] w-full px-3 flex items-center max-lg:justify-center'>
                      <div className='faq-bg lg:py-[45px] lg:px-[42px] md:px-8 md:py-9 sm:py-7 sm:px-6 py-6 px-5 backdrop-blur-[35px] rounded-[30px] max-w-[590px] w-full'>
                          <p className='lg:text-5xl font-normal sm:text-4xl text-3xl font-godzilla text-white lg:leading-custom-3xl'>Traits</p>
                          <div className='border-b border-white opacity-20 w-full pt-[26px]'></div>
                          <div className='flex pt-[26px] justify-between w-full'>
                              <div className='w-1/2'>
                                  <p className='font-normal font-oswald text-lg sm:text-custom2xl sm:leading-8 text-white max-w-[110px]'>Background:8
                                      Skins:19
                                      Headwear:37
                                      Clothes:44</p>
                              </div>
                              <div className='w-1/2'>
                                  <p className='font-normal font-oswald text-lg sm:text-custom2xl sm:leading-8 text-white max-w-[107px]'>Eyes:23
                                      Mouth:33
                                      Accessories:7</p>
                              </div>
                          </div>
                          <p className='lg:text-5xl font-normal sm:text-4xl text-3xl font-godzilla text-white lg:leading-custom-3xl lg:pt-14 md:pt-10 pt-6'>Stats</p>
                          <div className='border-b border-white opacity-20 w-full pt-[26px]'></div>
                          <div className='flex pt-[26px] justify-between w-full'>
                              <div className='w-1/2'>
                                  <p className='font-bold font-oswald sm:text-4xl sm:leading-custom-5xl text-custom3xl leading-custom-3xl lg:text-5xl lg:leading-custom-8xl text-white max-w-[110px]'>
                                      9,999</p>
                                  <p className='font-normal font-oswald text-custom2xl leading-8 text-white pt-1'>Total Kaijuu</p>
                              </div>
                              <div className='w-1/2'>
                                  <div>
                                      <p className='font-bold font-oswald sm:text-4xl sm:leading-custom-5xl text-custom3xl leading-custom-3xl lg:text-5xl lg:leading-custom-8xl text-white max-w-[110px]'>
                                          0.0555</p>
                                      
                                  </div>
                                  <p className='font-normal font-oswald text-custom2xl leading-8 text-white pt-1'>Mint Cost</p>
                              </div>
                          </div>
                      </div>
                  </div>
             </div>
          </div>
    </div>
  )
}

export default Traits