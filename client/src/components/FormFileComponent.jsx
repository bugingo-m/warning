import React from 'react'

const FormFileComponent = ({name,type,labelText}) => {
  return (
    <div className='form-row'>
			<label htmlFor={name} className='form-label'>{labelText || name}</label>
			<input id={name} type={type} name={name} 
            className='form-input'
            accept='image/*'/>
		</div>
  )
}

export default FormFileComponent
