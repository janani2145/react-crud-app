import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { deleteUser, fetchUsers } from '../Services/mockApis';


export const StateTable = () => {
  const [users, setUsers] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
     fetchUsers()
     .then((response)=>
            setUsers(response))
        .catch ((error)=> {
            console.error('Error fetching users:', error)
        });
}, []);

  const deleteData = async (id) => {
    try {
        await deleteUser(id);
        setUsers(users.filter(user => user.id !== id));
    } catch (error) {
        console.error("Error in delete", error);
    }
};

  const editData = (id) => {
    nav(`/state/edit/${id}`);
  };

  return (
<>
<div className="container">
<div> 
<button className="btn btn-secondary mt-5" onClick={()=>{nav("/stateform")}}>Back</button>
</div>
<h1 className='text-center text-white'>User Details</h1>
      <table className="table table-responsive table-striped text-bg-dark col-md-12 mt-3">
        <thead >
          <tr>
            <th className='text-bg-secondary text-center'>SI.No</th>
            <th className='text-bg-secondary text-center'>Name</th>
            <th className='text-bg-secondary text-center'>Email</th>
            <th className='text-bg-secondary text-center '>Password</th>
            <th className='text-bg-secondary text-center'>Actions</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {users.map((user,index) => (
            <tr  key={user.id}>
              <td  >{index +1}</td>
              <td  >{user.name}</td>
              <td >{user.email}</td>
              <td >{user.password}</td>
              <td >
                <button className='btn btn-secondary ' onClick={() => editData(user.id)}>Edit</button>
                <button className='btn btn-danger ms-2 ' onClick={() => deleteData(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};