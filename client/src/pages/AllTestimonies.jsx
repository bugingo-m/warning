import React,{useContext,createContext} from 'react'
import { useLoaderData } from 'react-router-dom'
import { TestimoniesContainer } from '../components'
import customFetch from '../utils/customFetch'

export const loader =async({request})=>{
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries()
    ])
    const {data} = await customFetch.get('/testimony',{params})
    return{data,
    searchValues:{...params}}
  } catch (error) {
    return error
  }
}
const TestimoniesContext = createContext()
const AllTestimonies = () => {
  const {data,searchValues} = useLoaderData()
  const {testimonies,numOfTestimonies,currentPage,numOfPages} = data
  // console.log(testimonies,numOfTestimonies,currentPage,numOfPages);
  return (
    <TestimoniesContext.Provider value={{testimonies,
      numOfTestimonies,currentPage,numOfPages,searchValues}}>
      
      <TestimoniesContainer/>
    
    </TestimoniesContext.Provider>
    
  )
}
export const useTestimoniesContext =()=>useContext(TestimoniesContext)
export default AllTestimonies
