import React from 'react'
import Wrapper from '../assets/wrappers/QuestionsContainer'
import Question from './Question'
import PaginateQuestions from './PaginateQuestions'
import { useAllQuestionsContext } from '../pages/AllQuestions'
const QuestionsContainer = () => {
  const {questions,user,totalQuestions,currentPage,numOfPages} = useAllQuestionsContext()
  if(questions.length === 0){
    return(
      <Wrapper>
        <h2>No questions and answers to display</h2>
      </Wrapper>
    )
  }
  
  return (
    <Wrapper>
      <h5 className='qn-title'>{totalQuestions} {(totalQuestions>1)?'questions':'question'}</h5>
      {questions.map((question)=>{
        return(
          <Question key={question._id} {...question} user={user}/>
        )
      })}
      {(numOfPages>1)&&<PaginateQuestions/>}
    </Wrapper>
  )
}

export default QuestionsContainer
