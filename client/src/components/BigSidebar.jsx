import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar'
import { useDashboardContext } from '../pages/Dashboard'
import {NavLinksComponent} from '../components'
const Sidebar = () => {
  const {showSidebar,toggleSidebar} = useDashboardContext()
  return (
    <Wrapper>
      <div className={showSidebar?'container':'container show-sidebar'}>
        <div className="wrapper">
          <NavLinksComponent isBigSidebar/>
        </div>
      </div>
      
    </Wrapper>
  )
}

export default Sidebar
