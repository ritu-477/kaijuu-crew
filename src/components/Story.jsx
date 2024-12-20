import React from 'react'
import storyImg from '../assets/images/webp/story-image.webp'
import CommonPara from '../common/CommonPara'
import CommonHeading from '../common/CommonHeading'

const Story = () => {
  return (
      <div className='bg-charcoal-black lg:pt-16 md:pt-14 pt-12 lg:pb-24 md:pb-16 sm:pb-14 pb-6 -mt-[2px]' id='story'>
          <div className='container'>
              <div className='flex flex-wrap lg:flex-row flex-col max-lg:flex-col-reverse'>
                  <div className='lg:w-[48%] w-full flex max-lg:justify-center lg:mt-0 mt-5'>
                      <img className='max-w-[619px] pointer-events-none w-full' src={storyImg} alt="story-image" />
                  </div>
                  <div className='lg:w-[52%] w-full flex justify-center flex-col lg:items-end'>
                      <div className='flex flex-col'>
                          <CommonHeading className="text-center lg:text-start !text-red" text={'Story'} />
                          <CommonPara className='max-w-[648px] lg:text-start max-lg:mx-auto text-center sm:pt-5 lg::pt-7 pt-4' text={`It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`} />
                      </div>
                  </div>
               </div>
          </div>
    </div>
  )
}

export default Story