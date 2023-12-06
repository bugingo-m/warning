import React from 'react'
import { Form,useLoaderData,redirect,useNavigation } from 'react-router-dom'
import { TextAreaComponent } from '../components'
import customFetch from '../utils/customFetch'
import {toast} from 'react-toastify'
import Wrapper from '../assets/wrappers/AnswerQuestion'

export const action = async ({request,params})=>{
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
     await customFetch.patch(`/user/answer/admin/${params.id}`,data)
     toast.success('answered successfully')
    return redirect('/dashboard/all-questions')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
 
}
export const loader =async({params})=>{
  try {
    const {data} = await customFetch.get(`/questions/${params.id}`)
    return data
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
    
  }
}
const AnswerQuestion = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  const data = useLoaderData()
  const {question} = data
  return (
    <Wrapper>
      <div className="question-container">
        <p>{question.question || 'Your question here?'}</p>
           <Form className='form text-form' method='post'>
              <TextAreaComponent name='answer' defaultValue={question.answer} 
              />
              <button className='btn-submit ask-btn'
               type='submit' disabled={isSubmitting}>
                {isSubmitting?'answering':'answer'}</button>
           </Form>
      </div>
    </Wrapper>
  )
}

export default AnswerQuestion
