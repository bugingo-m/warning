import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import {AiOutlineClose} from 'react-icons/ai'
import { NavLink,Link } from 'react-router-dom'
import { useLandingContext } from '../pages/Landing'
const HomeSidebar = () => {
  const {showHomeSidebar,hideHomeSidebar} = useLandingContext()
  return (
    <Wrapper>
      <div className={showHomeSidebar?"overlay show":"overlay"}>
          <div className="container">
            <button className="close-btn" onClick={hideHomeSidebar} >
              <AiOutlineClose/></button>
            <div className="navigate-container">
			<NavLink to='/' className='login-1' end onClick={hideHomeSidebar}>Home</NavLink>
			<NavLink to='/preparations' className='login-1' end onClick={hideHomeSidebar}>Preparations</NavLink>
			<NavLink to='/author' className='login-1' end onClick={hideHomeSidebar}>Author</NavLink>
            <Link to='/login' className="login-1" onClick={hideHomeSidebar}>login</Link>
            <Link to='/register'  className="login-1" onClick={hideHomeSidebar}>signup</Link>
          </div>
          </div>
            
        </div>
    </Wrapper>
  )
}

export default HomeSidebar
