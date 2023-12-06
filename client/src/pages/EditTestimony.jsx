import React from 'react'
import {Form,redirect,useNavigation,useLoaderData} from 'react-router-dom'
import customFetch from '../utils/customFetch'
import{FormRowComponent,TextAreaComponent,FormFileComponent,FormRowComponentOption} from '../components'
import Wrapper from '../assets/wrappers/Profile'
import {toast} from 'react-toastify'
export const loader = async({params})=>{
  try {
    const {data} = await customFetch.get(`/testimony/${params.id}`)
    return data
  } catch (error) {
    return error
  }
}
export const action =async({request,params})=>{
  const formData = await request.formData()
  const file = formData.get('avatar')
  if(file && file.size >500000){
    toast.error('file size greater than 0.5MB')
  }
  try {
    await customFetch.patch(`/testimony/${params.id}`,formData)
    toast.success('testimony edited')
    return redirect('/dashboard')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const EditTestimony = () => {
  const data = useLoaderData()
  const {testimony} = data
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form method='post' className='form' encType='multipart/form-data'>
        <h3 className='form-heading'>Edit testimony</h3>
        <FormRowComponent type='person' name='person' defaultValue={testimony?.person}/>
        <FormRowComponent type='text' name='country' defaultValue={testimony?.country}/>
        <FormRowComponentOption type='text' name='trLink' labelText='link (Optional)'
        defaultValue={testimony?.trLink}/>
        <FormFileComponent type='file' name='avatar' 
        labelText='testimony image'/>
        <TextAreaComponent name='biography' defaultValue={testimony?.biography}/>
        <TextAreaComponent name='testimony' labelText='Testimony details'
        defaultValue={testimony?.testimony}/>
        <button className='btn-submit'style={{marginTop:'2rem'}} 
              type='submit' disabled={isSubmitting}>
                {isSubmitting?'saving':'save changes'}</button>
        
      </Form>
    </Wrapper>
  )
}

export default EditTestimony
