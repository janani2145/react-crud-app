import React, { useState } from 'react'
import Table from './components/Table/Table'
import Form from './components/Form/Form'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



 const App = () => {
    const [users,setUsers]=useState([]);
  return (
    <div>
           <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form setUsers={setUsers}/>} />
      <Route path="/table" element={<Table users={users}/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;