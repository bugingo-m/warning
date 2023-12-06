import React from 'react'

const FormRowComponent = ({name,type,labelText,defaultValue=''}) => {
  return (
    <div className='form-row'>
			<label htmlFor={name} className='form-label'>{labelText || name}</label>
			<input id={name} type={type} name={name} className='form-input'
       defaultValue={defaultValue} required/>
		</div>
  )
}

export default FormRowComponent
