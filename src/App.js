
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import './App.css'
// import Edit from './components/useFormik/Edit/Edit'
// import Form from './components/useFormik/Form/Form'
// import {Table} from './components/useFormik/Table/Table'
import { ReducerForm } from './components/useReducer/Api/ReducerForm'
import ReducerList from './components/useReducer/Api/ReducerList'
import ReducerEdit from './components/useReducer/Api/ReducerEdit'



 const App = () => {
 
  return (
    <div>
           <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Form/>} />
      <Route path="/edit/:id" element={<Edit/>} />
      <Route path="/table" element={<Table />} /> */}
      <Route path= "/" element ={<ReducerForm/>}/>
      <Route path= "/reducertable" element ={<ReducerList/>}/>
   <Route path="/reducer/edit/:id" element={<ReducerEdit/>}/>
   
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;