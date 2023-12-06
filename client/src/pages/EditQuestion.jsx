import React from 'react'
import { Form,redirect,useNavigation,useLoaderData } from 'react-router-dom'
import { TextAreaComponent } from '../components'
import Wrapper from '../assets/wrappers/AnswerQuestion'
import customFetch from '../utils/customFetch'
import {toast} from 'react-toastify'

export const loader =async({params})=>{
  try {
    const {data} = await customFetch.get(`/questions/${params.id}`)
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}
export const action = async({request,params})=>{
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetch.patch(`/questions/${params.id}`,data)
    toast.success('edited successfully')
    return redirect('/dashboard/all-questions')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
    
  }
}

const EditQuestion = () => {
  const data = useLoaderData()
  const {question} = data
  console.log(question);
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form className='form text-form' method='post'>
              <TextAreaComponent name='question' 
              labelText='Edit your question'
               defaultValue={question.question}/>
              <button className='btn-submit ask-btn' 
              type='submit' disabled={isSubmitting}>
                {isSubmitting?'editing':'edit'}</button>
           </Form>
    </Wrapper>
  )
}

export default EditQuestion
