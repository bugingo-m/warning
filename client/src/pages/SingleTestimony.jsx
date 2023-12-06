import React from 'react'
import customFetch from '../utils/customFetch'
import {useLoaderData} from 'react-router-dom'
import Wrapper from '../assets/wrappers/SingleTestimony'
export const loader = async({params})=>{
  try {
    const {data}= await customFetch.get(`/testimony/${params.id}`)
    return data
  } catch (error) {
    return error
  }
} 
const SingleTestimony = () => {
  const data = useLoaderData()
  const {testimony} = data
   
  return (
    <Wrapper>
      <div className="head">
        <h2>{testimony?.person}</h2>
        <p>{testimony?.country}</p>
      </div>
      {testimony?.avatar && (
        <div className="img-wrapper">
        <img src={testimony?.avatar} alt="testimony" className="img" />
      </div>
      )}
      
      <p className='link'> <a href={testimony?.trLink} 
      target='_blank' rel='noopener noreferrer'>{testimony?.trLink && 'Watch testimony'}</a></p>
      {testimony?.testimony.split('>>').map((item,index)=>{
        return(
          <p key={index} className='line'>{item}</p>
        )
      })}
      
    </Wrapper>
  )
}

export default SingleTestimony
