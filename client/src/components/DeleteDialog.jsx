import React from 'react'
import Wrapper from '../assets/wrappers/DeleteDialog'
import {AiOutlineClose} from 'react-icons/ai'
import {Form} from 'react-router-dom'
import { useDashboardContext } from '../pages/Dashboard'
const DeleteDialog = ({_id,type}) => {
  const {dialog,closeDialog} = useDashboardContext()
  const act = type ==='testimony' ?`/dashboard/delete-testimony/`:
  `/dashboard/delete-question/`
  console.log(_id);
  return (
    <Wrapper>
      <div className={dialog?'overlay show-dialog':'overlay '}>
      <div className="container">
        <button className="close-btn" onClick={closeDialog}><AiOutlineClose/></button>
        <h4>Confirm the action</h4>
        <p>Do you really want to delete this {type ==='testimony'?'testimony':'question'}?</p>
        <div className="btn-container">
            <Form method='post' action={`${act}${_id}`}>
               <button type='submit' className="ok" onClick={closeDialog}>OK</button>
            </Form>
            
            <button className="cancel" onClick={closeDialog}>CANCEL</button>
        </div>
      </div>
      </div>
      
    </Wrapper>
  )
}

export default DeleteDialog
