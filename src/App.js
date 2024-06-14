import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Edit from './components/useFormik/Edit/Edit';
import Form from './components/useFormik/Form/Form';
import { Table } from './components/useFormik/Table/Table';
import { ReducerForm } from './components/useReducer/Api/ReducerForm';
import ReducerList from './components/useReducer/Api/ReducerList';
import ReducerEdit from './components/useReducer/Api/ReducerEdit';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="form" element={<Form />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="table" element={<Table />} />
          <Route path="reducerform" element={<ReducerForm />} />
          <Route path="reducertable" element={<ReducerList />} />
          <Route path="reducer/edit/:id" element={<ReducerEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
