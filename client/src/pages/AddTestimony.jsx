import React from 'react'
import {Form,redirect,useNavigation} from 'react-router-dom'
import customFetch from '../utils/customFetch'
import{FormRowComponent,TextAreaComponent,FormFileComponent,FormRowComponentOption} from '../components'
import Wrapper from '../assets/wrappers/Profile'
import {toast} from 'react-toastify'
export const action =async({request})=>{
  const formData = await request.formData()
  const file = formData.get('avatar')
  if(file && file.size >500000){
    toast.error('file size greater than 0.5MB')
  }
  try {
    await customFetch.post('/testimony',formData)
    toast.success('testimony added')
    return redirect('/dashboard')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}
const AddTestimony = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form method='post' className='form' encType='multipart/form-data'>
        <h3 className='form-heading'>add testimony</h3>
        <FormRowComponent type='person' name='person'/>
        <FormRowComponent type='text' name='country'/>
        <FormRowComponentOption type='text' name='trLink' labelText='link (Optional)'/>
        <FormFileComponent type='file' name='avatar' 
        labelText='testimony image'/>
        <TextAreaComponent name='biography'/>
        <TextAreaComponent name='testimony' labelText='Testimony details'/>
        <button className='btn-submit'style={{marginTop:'2rem'}} 
              type='submit' disabled={isSubmitting}>
                {isSubmitting?'posting':'post'}</button>
        
      </Form>
    </Wrapper>
  )
}

export default AddTestimony
