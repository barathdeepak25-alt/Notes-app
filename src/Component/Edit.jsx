import React from 'react'

const Edit = ({ id, text,editHandle,deleteHandle }) => {
  return (
    <div className='note'>
        <p>{text}</p>
        <div className='note_footer'style={{justifyContent:"flex-end"}}>
             <button className='note_save'onClick={()=>deleteHandle(id)}>Delete</button> &nbsp;
             <button className='note_save' onClick={()=>editHandle(id,text)}>Edit</button>
        </div>
    </div>
  )
}

export default Edit