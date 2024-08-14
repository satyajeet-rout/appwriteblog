import React from 'react'
import logo from '../assets/blog.svg';

function Logo({width = '100px'}) {
  return (
    <div>
     
      <img src={logo} alt="Logo" width={width} className='rounded-full'/>
        
    </div>
  )
}

export default Logo