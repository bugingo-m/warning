import React from 'react'
import Wrapper from '../assets/wrappers/RegisterLogin'
import {FormRowComponent} from '../components'
import {Link,Form,redirect,useNavigation} from 'react-router-dom'
import {toast} from 'react-toastify'
import customFetch from '../utils/customFetch'

export const action =async({request})=>{
	const formData = await request.formData()
	const data = Object.fromEntries(formData)
	try {
		await customFetch.post('/auth/register',data)
		toast.success('Registration successful')
		return redirect('/login')
	} catch (error) {
		toast.error(error?.response?.data?.msg)
		return error
	}
}
const Register = () => {
	const navigation = useNavigation()
	const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
        <div className='register'>
		      <Form className='form' method='post'>
			    <h3 className='form-heading'>Register</h3>
          <FormRowComponent name='firstName' type='text' labelText='first name'/>
          <FormRowComponent name='email' type='email'/>
          <FormRowComponent name='password' type='password'/>
			    <FormRowComponent name='lastName' type='text' labelText='last name'/>
			    
			    <button className='btn-submit' type='submit'
				disabled={isSubmitting}>
					{isSubmitting?'submitting':'submit'}</button>
			    <div className='form-qn'>
			      <p className='qn'>Are you a member already?</p>
			      <Link to='/login'>login</Link>
			    </div>
			
		  </Form>
		  </div>
    </Wrapper>
  )
}

export default Register
