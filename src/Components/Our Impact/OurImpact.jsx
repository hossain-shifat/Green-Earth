import React from 'react'

const OurImpact = () => {
  return (
    <div className='bg-[#CFF0DC] py-18'>
      <h1 className="text-center text-2xl text-black pb-5 md:text-3xl font-semibold">Our Impact</h1>
            <div className="grid md:grid-cols-3 gap-4">
                <div className='card w-80 md:w-100 mx-auto'>
                    <div className="card-body bg-white flex flex-col justify-center text-center rounded-2xl">
                        <h1 className="text-2xl font-semibold text-[#15803D] md:text-3xl">500K+</h1>
                        <p className="text-[1rem] text-[#1F2937]/80">Trees Planted</p>
                    </div>
                </div>
                <div className="card w-80 md:w-100 mx-auto">
                    <div className="card-body bg-white flex flex-col justify-center text-center rounded-2xl">
                        <h1 className="text-2xl font-semibold text-[#15803D] md:text-3xl">120+</h1>
                        <p className="text-[1rem] text-[#1F2937]/80">Communities Involved</p>
                    </div>
                </div>
                <div className="card w-80 md:w-100 mx-auto">
                    <div className="card-body bg-white flex flex-col justify-center text-center rounded-2xl">
                        <h1 className="text-2xl font-semibold text-[#15803D] md:text-3xl">30+</h1>
                        <p className="text-[1rem] text-[#1F2937]/80">Countries Reached</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default OurImpact
