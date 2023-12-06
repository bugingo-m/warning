import React from 'react'
import Testimony from './Testimony'
import PageBtnContainer from './PageBtnContainer'
import { useTestimoniesContext } from '../pages/AllTestimonies'
import Wrapper from '../assets/wrappers/TestimoniesContainer'
const TestimoniesContainer = () => {
    const {testimonies,numOfTestimonies,numOfPages} = useTestimoniesContext()
    if(testimonies.length === 0){
        return(
            <Wrapper>
                <h3>No testimonies</h3>
            </Wrapper>
            
        )
    }

  return (
    <Wrapper>
      <h5 className='test-title'>{numOfTestimonies} {(numOfTestimonies>1) ? 'testimonies':'testimony'}</h5>
      {/* <h2>Testimonies</h2> */}
      <div className="testomonies-container">
      {testimonies.map((testimony,index)=>{
        
        return(
            <Testimony key={testimony._id} odd={(index+1)%2} {...testimony} />  
        )
      })}
      </div>
      {numOfPages > 1 && <PageBtnContainer/>}
      
    </Wrapper>
  )
}

export default TestimoniesContainer
