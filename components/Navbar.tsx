import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className='navbar'>

     <Link to={"/"}>
      
      <h1 className='text-2xl text-gradient font-bold'>Resumind</h1>
     
     
     </Link>

    <Link to={"/upload"} className='primary-button w-fit'>
    
    Upload Your Resume
    
    </Link>
     

      
    </nav>
  )
}

export default Navbar
