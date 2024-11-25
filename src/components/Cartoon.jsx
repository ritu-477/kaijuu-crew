import React from 'react'
import { CONTINUE_SLIDER_DATA } from '../utils/Helper'

const Cartoon = () => {
  return (
    <div>
      <div className="overflow-hidden mx-auto max-w-[1920px]">
        <div className="sm:mt-8 mt-6 flex slider-container">
          {[...CONTINUE_SLIDER_DATA, ...CONTINUE_SLIDER_DATA].map((logo, index) => (
            <div
              key={index}
              className="!flex !items-center justify-end">
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain"
                style={{ maxWidth: logo.maxWidth, width: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cartoon