import React from 'react'
import CommonHeading from '../common/CommonHeading'
import CommonPara from '../common/CommonPara'
import aboutImg from '../assets/images/webp/about-image.webp'

const AboutUs = () => {
  return (
      <div className='bg-charcoal-black -mt-1'>
          <div className='container pt-12 md:pt-[61px] pb-12 sm:pb-16 md:pb-24 lg:pb-[135.84px]'>
              <div className='flex flex-row justify-between flex-wrap -mx-3 max-lg:justify-center'>
                  <div className='lg:w-1/2 w-full px-3 flex flex-col justify-center max-lg:items-center'>
                      <CommonHeading
                          className=""
                          text={<><span className="text-red">About</span>{' '}<span className="text-white">Us</span></>
                          }
                      />
                      <CommonPara className='lg:max-w-[648px] lg:text-start text-center w-full sm:pt-7 pt-4' text={`It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`} />
                      <div className='sm:pt-[34px] pt-6'>
                          <button className='py-3 sm:px-8 px-4 font-oswald group bg-red hover:bg-white text-white transition duration-300 text-base sm:text-lg font-bold hover:text-red rounded-lg'>
                              MINT NFT</button>
                     </div>
                  </div>
                  <div className='lg:w-1/2 w-full px-3 flex lg:justify-end justify-center lg:mt-0 mt-5'>
                      <img className='max-w-[579px] w-full mx-auto' src={aboutImg} alt="about-image" />
                  </div>
              </div>
          </div>    
    </div>
  )
}

export default AboutUs