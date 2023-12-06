import React,{useState} from 'react'
import Wrapper from '../assets/wrappers/Question'

import { Link } from 'react-router-dom'
import{AiOutlineEdit,AiOutlineDelete} from 'react-icons/ai'
import{MdQuestionAnswer} from 'react-icons/md'
import {TfiAngleDoubleRight,TfiAngleDoubleLeft} from 'react-icons/tfi'

import { useDashboardContext } from '../pages/Dashboard'
import day from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
day.extend(advancedFormat)
const Question = ({_id,question,answer,createdAt,user}) => {
  const [more,setMore] = useState(false);
  
    const isAdmin = user.role === 'admin'
    const date = day(createdAt).format('MMM Do, YYYY')
    let minlength = 300;
    let length = answer.length
    const showText=(id)=>{
      setMore(!more)
    }
    console.log( _id );
  return (
    <Wrapper>
      
      <p className='qn'>{question}</p>
      <div className="date">
        <p><span>ASKED ON</span> {date} </p>
      </div>
      {(length <= minlength) && <p className='ans'>{answer}</p>}
      
      {(length > minlength) && <p className='ans'> 
       {!more?answer.substring(0,minlength)+'...':answer}  
      <button className='details' 
      onClick={()=>showText(_id)}>{more?
      <span className='align-1'>  &nbsp; <TfiAngleDoubleLeft/>less
      </span>:<span className='align-2'>more<TfiAngleDoubleRight/></span>}</button>
      </p>}
      {isAdmin && <div className="action-btns">
        <Link to={`/dashboard/answer/${_id}`} className='answer'><span><MdQuestionAnswer/></span>answer</Link>
        <Link to={`/dashboard/edit-question/${_id}`} className='edit'><AiOutlineEdit/>edit</Link>
        <Link to={`/dashboard/delete-question/${_id}`} className='delete' >
          <AiOutlineDelete/>delete</Link>
      </div> }
      
    </Wrapper>
  )
}

export default Question
