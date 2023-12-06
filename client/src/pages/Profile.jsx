import React from 'react'
import { Form,redirect,useNavigation,useOutletContext } from 'react-router-dom'
import { FormRowComponent,FormFileComponent } from '../components'
import Wrapper from '../assets/wrappers/Profile'
import customFetch from '../utils/customFetch'
import {toast} from 'react-toastify'
export const action =async({request})=>{
  const formData = await request.formData()
  const file = formData.get('avatar')
  if(file && file.size>500000){
    toast.error('image size is greater than 0.5MB')
    return null
  }
  try {
    await customFetch.patch('/user/update-user',formData)
    toast.success('profile updated successfully')
    redirect('/dashboard')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    
  }
  return null
}
const Profile = () => {
  const {user} = useOutletContext()
  console.log(user);
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  const {firstName,email,lastName} = user
  return (
    <Wrapper>
      
      <Form className='form' method='post' 
      encType='multipart/form-data'>
        <h3 className='form-heading'>Profile</h3>
        <FormRowComponent type='text' name='firstName' 
        labelText='first name' defaultValue={firstName}/>
        <FormRowComponent type='email' name='email'
        defaultValue={email}/>
        <FormRowComponent type='text' name='lastName' 
        labelText='last name' defaultValue={lastName}/>
        <FormFileComponent name='avatar' type='file'
        labelText='choose file'/>
        <button className='btn-submit' type='submit'
          disabled={isSubmitting}>
            {isSubmitting?'saving':'save changes'}</button>

      </Form>
    </Wrapper>
  )
}

export default Profile
