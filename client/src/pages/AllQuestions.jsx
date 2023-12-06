import React,{useContext,createContext} from 'react'
import{QuestionsContainer,Participants} from '../components'
import { useOutletContext, useLoaderData } from 'react-router-dom'
import Wrapper from '../assets/wrappers/AllQuestions'
import customFetch from '../utils/customFetch'
import {toast} from 'react-toastify'

export const loader = async({request})=>{
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries()
    ])
    const {data} = await customFetch.get('/questions',{params}) 
    return {data,
    searchValues:{...params}}
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
} 
const AllQuestionsContext = createContext()
const AllQuestions = () => {
  
  const {data,searchValues} = useLoaderData()
  const {user} = useOutletContext()
  const {questions,totalQuestions,currentPage,numOfPages,allQuestions} = data
  
  return (
    <Wrapper>
      <AllQuestionsContext.Provider value={{
        user,
        questions,
        searchValues,
        totalQuestions,currentPage,numOfPages,
        allQuestions,
        }}>
        <QuestionsContainer/>
        <Participants/>
      </AllQuestionsContext.Provider>
      
    </Wrapper>
  )
}
export const useAllQuestionsContext=()=>useContext(AllQuestionsContext)
export default AllQuestions
