import React from 'react'
import { Form,redirect,useNavigation } from 'react-router-dom'
import { TextAreaComponent } from '../components'
import Wrapper from '../assets/wrappers/AnswerQuestion'
import customFetch from '../utils/customFetch'
import {toast} from 'react-toastify'

export const action = async({request})=>{
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetch.post('/questions',data)
    toast.success('question submitted')
    return redirect('/dashboard/all-questions')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}
const AddQuestion = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <div className="question-container">
        <p>Regarding this matter of great importance, you could be having a 
          question, feel free to ask and our team of experts is ready 
          to answer you. Thank you!
        </p>
           <Form className='form text-form' method='post'>
              <TextAreaComponent name='question' 
              labelText='type your question'/>
              <button className='btn-submit ask-btn' 
              type='submit' disabled={isSubmitting}>
                {isSubmitting?'asking':'ask'}</button>
           </Form>
      </div>
    </Wrapper>
  )
}

export default AddQuestion
