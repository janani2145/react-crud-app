import React from 'react'


const Table = ({users}) => {
   
  return (
    <div className='container d-flex justify-content-center'>
         <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td><button>Edit</button><button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}

export default Table