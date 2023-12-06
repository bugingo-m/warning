import React,{useState} from 'react'
import { useQuery } from '@tanstack/react-query'
import customFetch from '../utils/customFetch'
import{ FaAngleDoubleLeft,FaAngleDoubleRight} from 'react-icons/fa'
import Participant from './Participant'
import Wrapper from '../assets/wrappers/Participants'
import { useAllQuestionsContext } from '../pages/AllQuestions'
const Participants = () => {
  const [pageNumber,setPageNumber] = useState(1)
  const {data,isLoading,isError} = useQuery(
    {
      queryKey:['users'],
      queryFn:async()=>{
        const {data} = await customFetch.get('/user/users')
        return data
      }
    }
  )
  //console.log(data?.users);
  const {allQuestions} = useAllQuestionsContext()
  const paginate =({array,pageSize,page})=>{
    return array.slice((page-1) * pageSize,page * pageSize)
  }
  const createdBy = [...new Set(allQuestions.map((question)=>question.createdBy))]
  const participants = createdBy?.map((n)=>{
    return(
      data?.users?.find((user)=>user._id === n)
    )
  })
  let numOfPages = Math.ceil(participants.length/4)
  const modifiedParticipants = paginate({array:participants,pageSize:4,page:pageNumber})
  //console.log(participants);
  
  if(isLoading){
    return(
      <Wrapper>
        <h3>loading...</h3>
      </Wrapper>
    )
  }
  if(isError){
    return(
      <Wrapper>
        <h3>error</h3>
      </Wrapper>
    )
  }
  if(modifiedParticipants.length === 0){
    return(
      <Wrapper>
        <h3>No participants</h3>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <h3>Participants</h3>
      {modifiedParticipants?.map((participant,index)=>{
        
        return(
          <Participant key={index} {...participant} />
        )

      })}
      {participants.length>4 && <div className='change-btns'>
        <button className="prev-btn"
        onClick={()=>{
          let prevPage = pageNumber-1
          if(prevPage<1)prevPage = numOfPages
          setPageNumber(prevPage)
        }

        }
        >
        <span><FaAngleDoubleLeft/>&nbsp;</span>
          prev
        </button>
        <button className="next-btn"
        onClick={()=>{
          let nextPage = pageNumber+1
          if(nextPage<1)nextPage = 1
          setPageNumber(nextPage)
        }

        }
        >next
        <span><FaAngleDoubleRight/>&nbsp;</span>
        </button>
      </div>}
    </Wrapper>
  )
}

export default Participants
