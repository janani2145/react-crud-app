import {  useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate} from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { postUser } from '../Services/mockApis';
const Form = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [spinner,setSpinner] = useState(false);
   
    const nav = useNavigate();

    const addData =async(e) => {
        e.preventDefault();
        if(name && email && password !== '') {
            setSpinner(true);
          
        const newUser = { name, email, password };
        try {
            const response = await postUser(newUser); 
            setUsers([...users, response]);
            nav('/table');
            setName("");
            setEmail("")
            setPassword("")
            setSpinner(false)  }
        catch (error) {
            console.error('There was an error creating the user!', error);
            setSpinner(false);
        }

    }
}
    return (
        <>
       {spinner && <Spinner/>}
        <div className="container mt-5 pt-4 text-white d-flex justify-content-center">
            <form onSubmit={addData} className='form  p-5 rounded-5 formBg '>
                <h1 className='text-center'>Login</h1>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name" 
                        value={name} 
                        placeholder='Name'
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        value={email} 
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        name="password" 
                        value={password} 
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                <button type="submit" className="btn btn-info ">Submit</button></div>
            </form>
        </div>
        </>
    );
}

export default Form;
