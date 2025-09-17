import React from 'react'
import { assets } from '../../assets/assets'

const Banner = () => {
  return (
    <div>
        <div className='flex justify-between bg-[#CFF0DC] py-4 pt-6 md:pb-0'>
            <img src={assets.left} className='hidden md:block w-[546px] h-[383px] flex-shrink-0 aspect-[67/47]' alt=""/>
            <div className='text-center space-y-3 flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-bold md:text-4xl text-black'>Plant a Tree, Grow a Future</h1>
                <p className='details px-10 md:px-0'>Join our mission to plant 1 million trees and make the Earth greener for future generations.</p>
                <button className="btn rounded-full bg-[#FACC15] text-[#15803D]  font-bold border-none shadow-none">Get Involved</button>
            </div>
            <img src={assets.right} className='hidden md:block w-[546px] h-[383px] flex-shrink-0 aspect-[67/47]' alt=""/>
        </div>
    </div>
  )
}

export default Banner
