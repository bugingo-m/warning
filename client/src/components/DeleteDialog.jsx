import React from 'react'
import Wrapper from '../assets/wrappers/DeleteDialogNew'
import {AiOutlineClose} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import { useDashboardContext } from '../pages/Dashboard'
import customFetch from '../utils/customFetch'
import {toast} from 'react-toastify'
const DeleteDialog = ({id,type}) => {
  const {dialog,closeDialog} = useDashboardContext()
  const act = type ==='testimony' ?`/dashboard/delete-testimony/`:
  `/dashboard/delete-question/`
 const navigate = useNavigate()
 const executeTask =async(identity)=>{
  
  await customFetch.delete(`/questions/${identity}`)
  closeDialog()
  navigate('/dashboard/all-questions')
  toast.success('question deleted successfully')
 }
  return (
    <Wrapper>
      <div className={dialog?'overlay show-dialog':'overlay '}>
      <div className="container">
        <button className="close-btn" onClick={closeDialog}><AiOutlineClose/></button>
        <h4>Confirm the action</h4>
        <p>Do you really want to delete this question?</p>
        <div className="btn-container">
            
             <button type='button' className="ok" onClick={()=>executeTask(id)}>OK</button>
            
            
            <button className="cancel" onClick={closeDialog}>CANCEL</button>
        </div>
      </div>
      </div>
      
    </Wrapper>
  )
}

export default DeleteDialog
