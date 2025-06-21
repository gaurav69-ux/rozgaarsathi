import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white text-center  p-4 flex items-center  list-none">
        <header className='ml-2 mr-200 text-xl'> RozGaargadi </header>

          <Link to = "/about"><li className='mr-10'>about</li></Link>
          <Link to="/"><li className='mr-10'>home</li></Link>
          <Link to="/Login"><li className='mr-10'>sign out</li></Link>

        
    </div>
  )
}

export default Navbar