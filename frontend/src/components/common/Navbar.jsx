import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className=' bg-[#181818] grid grid-cols-2 md:grid-cols-3 place-content-center py-3 md:py-4 px-3 sm:px-10'>
          <div className=' text-2xl font-bold text-slate-50'>TRIPPIN'</div>
          <div className=' hidden md:flex'></div>
          <div>
              <ul className=' flex items-center justify-around text-slate-100'>
                  <li><a href="/" className=' duration-300 hover:text-stone-400'>Home</a></li>
                  <li><a href="/" className=' duration-300 hover:text-stone-400'>Itinerary</a></li>
                  <li><a href="/api" className=' duration-300 hover:text-stone-400'>Api</a></li>
              </ul>
          </div>
      </div>
      <div className=' w-screen h-1 bg-[#181818]'></div>
    </>
  )
}

export default Navbar