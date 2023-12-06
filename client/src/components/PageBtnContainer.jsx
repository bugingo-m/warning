import React from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import Wrapper from '../assets/wrappers/PageBtnContainer'
import{ FaAngleDoubleLeft,FaAngleDoubleRight} from 'react-icons/fa'
import { useTestimoniesContext } from '../pages/AllTestimonies'
const PageBtnContainer = () => {
    const {currentPage,numOfPages} = useTestimoniesContext()
    console.log(currentPage,numOfPages);
    const {search,pathname} = useLocation()
    const navigate = useNavigate();
    const handlePageChange = (pageNumber)=>{
        const searchParams = new URLSearchParams(search)
        searchParams.set('page',pageNumber)
        navigate(`${pathname}?${searchParams.toString()}`)
    }

    const addButton =({pageNumber,activeClass})=>{
      return(
        <button className={`page-btn ${activeClass && 'active'}`}
        key={pageNumber}
        onClick={()=>handlePageChange(pageNumber)}
        >{pageNumber}</button>
      )
    }

    const renderPageButtons =()=>{
      const pageButtons =[]
      //add first button
       pageButtons.push(addButton({pageNumber:1,activeClass:currentPage ===1}))
       //dots if the currentPage is greater than three
      if(currentPage > 3){
        pageButtons.push(<span className='dots' key='dots-1'>.....</span>)
      }
      //button before current page
      if((currentPage !==1) && (currentPage !==2)){
      pageButtons.push(addButton({pageNumber:currentPage-1,activeClass:false}))

      }
      //current page button
      if((currentPage !==1) && (currentPage !==numOfPages)){
       pageButtons.push(addButton({pageNumber:currentPage,activeClass:true}))

      }
      
      //button after current page
      if((currentPage !==numOfPages) && (currentPage !==numOfPages-1)){
        pageButtons.push(addButton({pageNumber:currentPage+1,activeClass:false}))
  
        }
      //adding dots if current page is less the numOfPages-2
      if(currentPage < numOfPages-2){
        pageButtons.push(<span className='dots' key='dots+1'>.....</span>)
      }

       //add last button
       pageButtons.push(addButton({pageNumber:numOfPages,activeClass:currentPage ===numOfPages}))
       return pageButtons;

    }
  return (
    <Wrapper>
      <button className='prev-btn'
      onClick={()=>{
        let prevPage = currentPage - 1
        if(prevPage < 1) prevPage=numOfPages
        handlePageChange(prevPage)
      }}
      >
        <span><FaAngleDoubleLeft/>&nbsp;</span>
        
        prev
      </button>
      <div className="button-container">{renderPageButtons()}</div>
      <button className='next-btn'
        onClick={()=>{
            let nextPage = currentPage + 1
            if(nextPage > numOfPages) nextPage = 1
            handlePageChange(nextPage)
        }}
      >
        next
        <span>&nbsp;<FaAngleDoubleRight/></span>
        
      </button>
    </Wrapper>
  )
}

export default PageBtnContainer
