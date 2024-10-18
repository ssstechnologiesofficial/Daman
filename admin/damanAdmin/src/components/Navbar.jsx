import React from 'react'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='bg-gray-800 px-4 py-3 flex justify-between'>Navbar
<div className='flex items-center text-xl'>
<FaBars className='text-white me-4 cursor-pointer'></FaBars>
<span className='text-white font-semibold'>Dashboard</span>
    </div>
</nav>  

)
}

export default Navbar