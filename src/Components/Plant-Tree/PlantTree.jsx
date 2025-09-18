import React from 'react'

const PlantTree = () => {
  return (
    <div className='bg-[#166534]'>
        <div className="px-3 md:px-10 py-18">
            <h1 className="text-2xl text-white text-center pb-4 font-bold md:text-3xl">Plant a Tree Today</h1>
            <div className="flex flex-col justify-center items-center gap-2 bg-[#15803D] max-w-[400px] mx-auto py-10 rounded-2xl">
                <input type="text" placeholder="Your Name" className="input focus:outline-none border-none bg-white placeholder:text-[#1F2937]/80" />
                <input type="text" placeholder="Your Email Address" className="input focus:outline-none border-none bg-white placeholder:text-[#1F2937]/80" />
                <input type="text" className="input bg-white focus:outline-none border-none text-[#1F2937] placeholder:text-[#1F2937]/80" placeholder="Number of Trees" list="trees" />
                <datalist id="trees">
                    <option value="1 Tree - $5"></option>
                    <option value="5 Trees - $25"></option>
                    <option value="10 Trees - $50"></option>
                </datalist>
                <div className="mt-2">
                    <button className="btn btn-soft px-30 rounded-full font-bold border-none bg-[#FACC15] text-[#15803D]">Donate Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlantTree
