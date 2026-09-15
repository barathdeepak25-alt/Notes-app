import Header from './Component/Header'
import './App.css'
import CreateNote from './Component/CreateNote'
import Notes from './Component/Notes'
import { useState } from 'react'

function App() {


  return (
    <div className='main'>
      <h1 className='title'>Notes app</h1>
      {/* <CreateNote /> */}
      <Notes />
      <Header />
    </div>
  )
}

export default App
