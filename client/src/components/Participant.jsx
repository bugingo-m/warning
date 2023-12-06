
import React from 'react'
import Wrapper from '../assets/wrappers/Participant'
import defaultImage from '../assets/images/default.jpg'

const Participant = ({firstName,email,avatar}) => {

    
    //const {user} =person 
    //console.log(user);
    
    
  return (

    <Wrapper>
      <article className='participants-container'>
		    <div className='img-container'>
			    <img src={avatar || defaultImage} alt='partcipant' className='img'/>
		    </div>
		    <article className='partcipant'>
		      {/* <p className='email'>{email}</p> */}
			    <h4 className='name'>{firstName}</h4>
			  </article>
		  </article>
        {/* <h3>participant</h3> */}
      
    </Wrapper>
  )
}

export default Participant
