import React from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import{FaAlignJustify} from 'react-icons/fa'
import{AiOutlineWarning} from 'react-icons/ai'
import {LogoutContainer} from '../components'
import { useDashboardContext } from '../pages/Dashboard'
const Navbar = () => {
  const {showSidebar,toggleSidebar} = useDashboardContext()
  return (
    <Wrapper>
     <nav className='nav-1'>
      <div className="container">
        <button className="toggle" onClick={toggleSidebar}><FaAlignJustify/></button>
        <div className="title">
          <span  className='img-1'><AiOutlineWarning/></span>
          <h2 className='nav-title'>Warning </h2>
        </div>
        <div className="logout">
          <LogoutContainer/>
        </div>
        
      </div>
     </nav> 
    </Wrapper>
  )
}

export default Navbar
