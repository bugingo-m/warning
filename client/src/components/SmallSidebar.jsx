import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import {AiOutlineClose} from 'react-icons/ai'
import { useDashboardContext } from '../pages/Dashboard'
import {NavLinksComponent} from '../components'
const SmallSidebar = () => {
  const {showSidebar,toggleSidebar} = useDashboardContext()
  return (
    <Wrapper>
        <div className={showSidebar?"overlay show":"overlay"}>
          <div className="container">
            <button className="close-btn" onClick={toggleSidebar}>
              <AiOutlineClose/></button>
              <NavLinksComponent/>
          </div>
            
        </div>
      
    </Wrapper>
  )
}

export default SmallSidebar
