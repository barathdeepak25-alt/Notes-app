import React, { useEffect, useState } from 'react'
import CreateNote from './CreateNote'
import {v4 as uuid} from 'uuid'
import Edit from './Edit'


const Notes = () => {
    const [inputText,setInputText]=useState("")
    const [notes,setNotes]=useState(() => {
      const storedNotes = localStorage.getItem("Notes")
      if (!storedNotes) return []

      try {
        const data = JSON.parse(storedNotes)
        return Array.isArray(data) ? data : []
      } catch (error) {
        console.error('Failed to parse notes from localStorage:', error)
        return []
      }
    })
    const [edit,setEdit]=useState(null)
    const editHandle=(id,text)=>{
      setEdit(id)
      setInputText(text)
    }
    const save=()=>{
      const trimmedText = inputText.trim()
      if (!trimmedText) return

      if(edit){
        setNotes(notes.map((note)=>(
          note.id===edit ?
          {...note, text:inputText}
          :note
        )))
      }else{
        setNotes((prevNotes)=>[
        ...prevNotes,{
          id:uuid(),
          text:trimmedText
        }
       ])
      }
       
       setInputText("")
       setEdit(null)
    }
    const deleteHandle =(id)=>{
      const newNotes=notes.filter(n=>n.id!==id)
      setNotes(newNotes)
    }

    useEffect(()=>{
      localStorage.setItem("Notes",JSON.stringify(notes))
    },[notes])

  return (
    <div className='notes'>
      {
        notes.map((note)=>(
          edit===note.id?
          <CreateNote 
        inputText={inputText}
        setInputText={setInputText}
        save={save}
      />
          :
          <Edit
            key={note.id}
            id={note.id}
            text={note.text}
            editHandle={editHandle}
            deleteHandle={deleteHandle}
          />
        ))
      }{
        edit===null ?
        <CreateNote 
        inputText={inputText}
        setInputText={setInputText}
        save={save}
      />:<></>
      }
      
    </div>
  )
}

export default Notes