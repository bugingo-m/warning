import React from 'react'
const FormRowComponentOption = ({name,type,labelText,defaultValue=''}) => {
  return (
    <div className='form-row'>
        <label htmlFor={name} className='form-label'>{labelText || name}</label>
			<input id={name} type={type} name={name} className='form-input'
       defaultValue={defaultValue}/>
    </div>
  )
}

export default FormRowComponentOption