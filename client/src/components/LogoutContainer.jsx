import React,{useState} from 'react'
import Wrapper from '../assets/wrappers/LogoutContainer'
import {BiUserCircle} from 'react-icons/bi'
import{IoIosArrowDropdownCircle} from 'react-icons/io'
import { useDashboardContext } from '../pages/Dashboard'
const LogoutContainer = () => {
  const [showButton,setShowButton]= useState(false)
  const {user,logout} = useDashboardContext()
  
  return (
    <Wrapper>
      <div className="logout">
        <div className="user">
          {user?.avatar?<img src={user.avatar} 
          className='img' alt='profile'/>:<span><BiUserCircle/></span>}
        
        <h4>{user.firstName}</h4>
        <button onClick={()=>setShowButton(!showButton)}><IoIosArrowDropdownCircle/></button>
        </div>
        {showButton && <button className='logout-btn' onClick={logout} >logout</button>}
      
      </div>
    </Wrapper>
  )
}

export default LogoutContainer
