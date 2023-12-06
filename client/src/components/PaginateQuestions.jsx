import React from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import Wrapper from '../assets/wrappers/PageBtnContainer'
import{ FaAngleDoubleLeft,FaAngleDoubleRight} from 'react-icons/fa'
import { useAllQuestionsContext } from '../pages/AllQuestions'
const PaginateQuestions = () => {
    const {pathname,search}= useLocation()
    const navigate = useNavigate()
    const {currentPage,numOfPages} = useAllQuestionsContext()
    const handlePageChange =(pageNumber)=>{
        const searchParams = new URLSearchParams(search)
        searchParams.set('page',pageNumber)
        navigate(`${pathname}?${searchParams.toString()}`)

    }
    const addButton =({pageNumber,activeClass})=>{
        return(
            <button key={pageNumber} className={`page-btn ${activeClass && 'active'}`}
            onClick={()=>handlePageChange(pageNumber)}
            >{pageNumber}</button>
        )
    }
    const renderButtons=()=>{
        const pageButtons =[]
        //add first button
        pageButtons.push(addButton({pageNumber:1,activeClass:currentPage===1}))
        //dots that preceed the button before active button
        if(currentPage>3){
          pageButtons.push(<span key='dots-1'>....</span>)
        }
        //button before current button
        if((currentPage !==1) && (currentPage !==2)){
            pageButtons.push(addButton({pageNumber:currentPage-1,activeClass:false}))

        }
        //current or active button
        if((currentPage !==1) && (currentPage !==numOfPages)){
            pageButtons.push(addButton({pageNumber:currentPage,activeClass:true}))

        }
        //button after current or active button
        if((currentPage !==numOfPages) && (currentPage !==numOfPages-1)){
          pageButtons.push(addButton({pageNumber:currentPage+1,activeClass:false}))

      }
        //dots that come after the button infront of the active button
        if(currentPage<numOfPages-2){
          pageButtons.push(<span key='dots'>....</span>)
        }
        //add last button
        pageButtons.push(addButton({pageNumber:numOfPages,activeClass:currentPage===numOfPages}))

        return pageButtons
    }
  return (
    
    <Wrapper>
      <button className="prev-btn"
      onClick={()=>{
        let prevPage = currentPage-1
        if(prevPage<1) prevPage=numOfPages
        handlePageChange(prevPage)
      }}
      >
        <span><FaAngleDoubleLeft/>&nbsp;</span>
        prev</button>

        {/* button container */}
        <div className='button-container'>{renderButtons()}</div>
        <button className="prev-btn"
        onClick={()=>{
            let nextPage = currentPage+1
            if(nextPage>numOfPages) nextPage=1
            handlePageChange(nextPage)
          }}
        >
            next
        <span>&nbsp;<FaAngleDoubleRight/></span>
        </button>
    </Wrapper>
  )
}

export default PaginateQuestions
