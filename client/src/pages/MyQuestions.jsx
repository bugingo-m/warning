import React from 'react'
import Wrapper from '../assets/wrappers/AllQuestions'
import { useLoaderData } from 'react-router-dom'
import customFetch from '../utils/customFetch'
import  {MyQuestion} from '../components'
export const loader = async()=>{
  try {
    const {data} = await customFetch.get('/user/my-questions')
    return {data}
  } catch (error) {
    return error
  }
}

const MyQuestions = () => {
  const {data} = useLoaderData()
  const {questions} = data
  console.log(questions);
  if(questions.length === 0){
    return(
      <Wrapper>
      <h2>you have no questions yet</h2>
    </Wrapper>
    )
  }
  return (
    <>
      
      {questions.map((question)=>{
        return <MyQuestion key={question._id} {...question}/>
      })}
    </>
  )
}

export default MyQuestions
