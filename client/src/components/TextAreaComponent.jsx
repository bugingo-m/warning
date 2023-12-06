import React from 'react'

const TextAreaComponent = ({name,labelText,defaultValue=''}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>{labelText || name}</label>
      <textarea name={name} id={name} className='text-area' 
      defaultValue={defaultValue} 
      required></textarea>
    </div>
  )
}

export default TextAreaComponent
