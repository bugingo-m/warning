import {redirect} from 'react-router-dom'
import customFecth from '../utils/customFetch'
import {toast} from 'react-toastify'
import Wrapper from '../assets/wrappers/DeleteDialog'
import{Link,Form} from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
export const action =async({params})=>{

  try {
    await customFecth.delete(`/testimony/${params.id}`)
    toast.success('deleted successfully')
    return redirect('/dashboard')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const DeleteTestimony =()=>{
  return(
    <Wrapper>
    <div className='overlay'>
      <div className="container">
        <Link to={'/dashboard'} className="close-btn" ><AiOutlineClose/></Link>
        <h4>Confirm the action</h4>
        <p>Do you really want to delete this testimony?</p>
        <div className="btn-container">
            <Form method='post'>
               <button type='submit' className="ok">OK</button>
            </Form>
            
            <Link to={'/dashboard'} className="cancel">CANCEL</Link>
        </div>
      </div>
      </div>
      
  </Wrapper>
  )
}
export default DeleteTestimony