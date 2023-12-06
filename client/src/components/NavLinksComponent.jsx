import React from 'react'
import links from '../utils/Links'
import{NavLink} from 'react-router-dom'
import Wrapper from '../assets/wrappers/NavLinksComponent'
import { useDashboardContext } from '../pages/Dashboard'
const NavLinksComponent = ({isBigSidebar}) => {
  const {toggleSidebar,user} = useDashboardContext()
  return (
    <Wrapper>
        
            {links.map((link)=>{
                const{id,icon,name,path} = link
                const {role} = user
                if(role !=='admin' && path === 'add-testimony')return
                return(
                    <div className="container1" key={id}>
                        <NavLink to={path}  onClick={isBigSidebar? null:toggleSidebar} end>
                        <div className="link-wrapper">
                            <span>{icon}</span>
                            <h4>{name}</h4>
                        </div>
                        
                    </NavLink>
                    </div>
                    
                )
            })}
            
        
      
    </Wrapper>
  )
}

export default NavLinksComponent
