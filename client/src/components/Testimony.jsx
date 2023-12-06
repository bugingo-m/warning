import React from 'react'
import Wrapper from '../assets/wrappers/Testimony'
import { Link,useOutletContext } from 'react-router-dom'
import{AiOutlineEdit,AiOutlineDelete} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'

const Testimony = ({_id,person,country,biography,odd}) => {
  const {user} = useOutletContext()
  
  const isAdmin =user.role === 'admin'
   
   
  return (
    <Wrapper odd={odd}>
      
      <header>
      <h2 className='first-char'>{person?.charAt(0)}</h2>
      <p className="person">{person} <span className='country'>({country})</span></p>
      </header>
      
      {/* <p>{odd}</p> */}
      <div>
        <p className="biography">{biography}</p>
        <div className="learn-more">
          <Link to={`/dashboard/single-testimony/${_id}`}
          className="learn">Learn more<span>&nbsp;<BsArrowRight/></span></Link>
        </div>
      </div>
      
      <footer  >
        {isAdmin && (
          <div className="action-btns">
          <Link to={`/dashboard/edit-testimony/${_id}`} className='edit'><AiOutlineEdit/>edit</Link>
          <Link to={`/dashboard/delete-testimony/${_id}`} className='delete' ><AiOutlineDelete/>
          delete</Link>
        </div>
        )}
        
        

      </footer>
    </Wrapper>
  )
}

export default Testimony
