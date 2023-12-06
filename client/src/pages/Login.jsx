import React from 'react'
import Wrapper from '../assets/wrappers/RegisterLogin'
import { FormRowComponent } from '../components'
import { Form,Link,redirect,useNavigation } from 'react-router-dom'
import customFetch from '../utils/customFetch'
import {toast} from 'react-toastify'
export const action = async({request})=>{
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetch.post('/auth/login',data)
    toast.success('Login successful')
    return redirect('/dashboard')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
  
}
const Login = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <div className="login">
        <Form  className="form" method='post'>
        <h3 className='form-heading'>login</h3>
          <FormRowComponent type='email' name='email'/>
          <FormRowComponent type='password' name='password'/>
          <button className='btn-submit' type='submit'
          disabled={isSubmitting}>{isSubmitting?'submitting':'submit'}</button>
			    <div className='form-qn'>
			      <p className='qn'>Not yet a member?</p>
			      <Link to='/register'>register</Link>
			    </div>
        </Form>
      </div>
    </Wrapper>
  )
}

export default Login
