import React from 'react'
import Wrapper from '../assets/wrappers/Error'
import {Link,useRouteError} from 'react-router-dom'
const Error = () => {
  const error = useRouteError()
  if(error.status === 404){
    return(
      <Wrapper>
        <div className="err">
          <h3>Oops!! we can't find what you are looking for!</h3>
          <div className="back-home">
            <p>Go back </p>
            <Link to='/'>home</Link>
          </div>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <h2>error</h2>
    </Wrapper>
  )
}

export default Error
