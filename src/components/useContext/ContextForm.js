import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { postSuccess } from './Action';
import { useNavigate } from 'react-router-dom';
import { postUser } from '../Services/mockApis';
import Spinner from '../Spinner/Spinner';
import { useUserContext } from './Context';



export const ContextForm = () => {
  const {state,dispatch } = useUserContext();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [nation, setNation] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [studentId, setStudentId] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const nav= useNavigate();
  const [spinner,setSpinner]=useState(false);



const handleReset = () => {
  setFname('');
  setLname('');
  setDob('');
  setNation('');
  setGender('');
  setDepartment('');
  setEmail('');
  setPhone('');
  setStudentId('');
  setAddress('');
  setZip('');
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(fname && lname && dob && nation && gender && studentId && department && phone &&  email && address && zip !== "" ){
      setSpinner(true);
    try {
        const response = await postUser({fname,lname,dob,nation,gender,studentId,department,phone,email,address,zip});
        dispatch(postSuccess(response));
        nav("/context/table");
        setSpinner(false);
        handleReset();
    } catch (error) {
        console.error('Error creating the user!', error);
        setSpinner(false)
    }}
};



  return (
    <>
    {spinner && <Spinner/>}
    <div className="container mt-5">
        <div className='d-flex justify-content-center align-items-center'>
          <form className="form w-50 p-4 border rounded bg-white shadow" onSubmit={handleSubmit}>
            <h2>Student Registration</h2>
            <h6>Personal Information</h6>
            <div className='row'>
              <div className='col'>
                <input
                  className='form-control p-1'
                  type="text"
                  name="fname"
                  placeholder='First Name'
                  value={fname}
                  onChange={(e)=>setFname(e.target.value)}
                />
            
              </div>
              <div className='col'>
  <input
    className='form-control p-1'
    type="text"
    name="lname"
    value={lname}
    placeholder='Last Name'
    onChange={(e)=>setLname(e.target.value)}
  />

</div>

            </div>
            <div className='row'>
              <div className='col mt-2'>
                <input
                  className='form-control p-1 '
                  type="date"
                  name="dob"
                  value={dob}
                  onChange={(e)=>setDob(e.target.value)}
         
                />
                
              </div>
              <div className='col mt-2'>
                <input
                  className='form-control p-1 '
                  type="text"
                  name="nation"
                  value={nation}
                  onChange={(e)=>setNation(e.target.value)}
                  placeholder='Nationality'
                />
                
              </div>
            </div>
            <label className=' mt-2'>Gender</label>
            <div className='d-flex'>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className='ms-2'>Male</label>
              </div>
              <div className='ms-5'>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === 'Female'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className='ms-2'>Female</label>
              </div>
  </div>

            <h6 className='mt-2'>Enrollment Details</h6>
            <div className='row'>
              <div className="col">
                <select
                  className='form-control p-1 '
                  name="department"
                  value={department}
                  onChange={(e)=>setDepartment(e.target.value)}
         
              
                >
                  <option value="">Select</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Computer">Computer</option>
                  <option value="Physics">Physics</option>
                  <option value="Zoology">Zoology</option>
                </select>
               
              </div>
              <div className="col">
                <input
                  className='form-control p-1 '
                  type="text"
                  name="studentId"
           value={studentId}
                  onChange={(e)=>setStudentId(e.target.value)}
                  placeholder='Student Id'
                />
              
              </div>
            </div>

            <h6 className='mt-1'>Contact Information</h6>
            <div className='row'>
              <div className="col">
                <input
                  className='form-control p-1'
                  type="text"
                  name="email"
                value={email}
                  onChange={(e)=>setEmail(e.target.value)}
         
                  placeholder='Email Address'
                />
                
              </div>
              <div className="col">
                <input
                  className='form-control p-1' 
                  type="text"
                  name="phone"
                  onChange={(e)=>setPhone(e.target.value)}
                    value={phone}      
                  placeholder='Phone Number'
                />
           
              </div>
            </div>
            <div className="row">
              <div className="col mt-2">
                <input
                  className='form-control p-1'
                  type="text"
                  name="address"
                  onChange={(e)=>setAddress(e.target.value)}
                  value={address}
                  placeholder='Address'
                />
               
              </div>
              <div className="col mt-2">
                <input
                  className='form-control p-1'
                  type="text"
                  name="zip"
                  onChange={(e)=>setZip(e.target.value)}
                 value={zip}
                  placeholder='Zip Code'
                />
              </div>
            </div>
            <div className='d-flex justify-content-end'>
              <button type="button" className="btn btn-success mt-3" onClick={handleReset}>Reset</button>
              <button type="submit" className="btn btn-success ms-3 mt-3">Submit</button>
            </div>
          </form>
        </div>
      </div></>
  )
}

      