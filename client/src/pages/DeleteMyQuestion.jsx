import {redirect} from 'react-router-dom'
import customFecth from '../utils/customFetch'
import {toast} from 'react-toastify'
import Wrapper from '../assets/wrappers/DeleteDialog'
import{Link,Form} from 'react-router-dom'
//import { AiOutlineClose } from 'react-icons/ai'
export const action =async({params})=>{
  console.log(params.id);

  try {
    await customFecth.delete(`/questions/${params.id}`)
    toast.success('deleted successfully')
    return redirect('/dashboard/my-questions')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}