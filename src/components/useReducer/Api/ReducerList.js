import React, { useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initialState, reducer } from './Reducer';
import { deleteUser, fetchUsers } from '../../Services/mockApis';
import { deleteSuccess, fetchSuccess } from './Action';
import { useNavigate } from 'react-router-dom';

const ReducerList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const nav=useNavigate();
    useEffect(() => {
        const getUsers = async () => {
            const response = await fetchUsers();
            dispatch(fetchSuccess(response));
        };
        getUsers();
    }, []);

const handleDelete=async(id)=>{
try{
  await deleteUser(id)
  dispatch(deleteSuccess(id))}
  catch(error){
    console.log(error)
  }
}
const handleEdit=(id)=>{
  nav(`/reducer/edit/${id}`)
}
const back=()=>{
    nav("/reducerform");
}
    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <h1 className='text-center'>Student Details</h1>
                    <button className='btn btn-dark my-2' onClick={back}>Back</button>
                    <table className='table table-striped table-responsive text-center'>
                        <thead>
                            <tr>
                                <th className='bg-dark text-white'>SI.No</th>
                                <th className='bg-dark text-white'>First Name</th>
                                <th className='bg-dark text-white'>Last Name</th>
                                <th className='bg-dark text-white'>DOB</th>
                                <th className='bg-dark text-white'>Nationality</th>
                                <th className='bg-dark text-white'>Gender</th>
                                <th className='bg-dark text-white'>Department</th>
                                <th className='bg-dark text-white'>Student Id No</th>
                                <th className='bg-dark text-white'>Email</th>
                                <th className='bg-dark text-white'>Phone Number</th>
                                <th className='bg-dark text-white'>Address</th>
                                <th className='bg-dark text-white'>Zip Code</th>
                                <th className='bg-dark text-white'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.fname}</td>
                                    <td>{user.lname}</td>
                                    <td>{user.dob}</td>
                                    <td>{user.nation}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.department}</td>
                                    <td>{user.studentId}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.address}</td>
                                    <td>{user.zip}</td>
                                    <td>
                                        <button className="btn btn-secondary" onClick={()=>handleEdit(user.id)}>Edit</button>
                                        <button className="ms-2 btn btn-danger" onClick={()=>handleDelete(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ReducerList;
