import React from 'react'
import { assets } from '../../assets/assets'

const Campain = () => {
  return (
    <div className='max-w-[1140px] mx-auto my-20 space-y-8'>
        <h1 className='text-center pt-3 text-2xl  md:text-3xl text-black font-semibold'>About the Campaign</h1>
            <div className="grid text-center justify-center items-center gap-4 md:gap-10 pb-5 md:flex">
                <div className="p-5 md:p-0 md:w-full">
                    <img src={assets.about} alt=""/>
                </div>
                <div className="text-left">
                    <p className="p-4 text-[1rem] text-[#1F2937]/80">Green Earth is a global tree plantation initiative dedicated to fighting climate change. Since our start, we’ve planted over 500,000 trees worldwide. By joining our campaign, you help restore forests, create habitats for wildlife, and combat global warming.</p>
                    <ul className="pl-12 list-disc text-[1rem] text-[#1F2937]/80">
                        <li>Restoration of natural habitats</li>
                        <li>Improvement of air quality</li>
                        <li>Support for local communities</li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default Campain
