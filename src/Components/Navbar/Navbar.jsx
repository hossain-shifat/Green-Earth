import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="navbar bg-[#15803D] shadow-sm px-5 font-inter flex justify-center items-center">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                {/* mobile view */}
                <ul tabIndex={0} className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 shadow text-[1rem] font-medium">
                    <li><a href="">About</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">Plant a Tree</a></li>
                </ul>
                </div>
                <a className="text-xl font-bold md:text-2xl">Green Earth</a>
            </div>

            {/* large screen view */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-inter text-[1rem] font-medium">
                    <li><a href="">About</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">Plant a Tree</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn rounded-full bg-[#FACC15] text-[#15803D]  font-bold border-none shadow-none">Plant a Tree</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
