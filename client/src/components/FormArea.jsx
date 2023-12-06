import React from 'react'

const FormArea = ({name,labelText,defaultValue=''}) => {
  return (
    <div className='form-row'>
        <label htmlFor={name} className='form-label'>{labelText || name}</label>
        <textarea id={name} className='form-input' required></textarea>
      
    </div>
  )
}

export default FormArea
