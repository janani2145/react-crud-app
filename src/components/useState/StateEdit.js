import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { fetchUserById, updateUser } from '../Services/mockApis';

const StateEdit = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [spinner, setSpinner] = useState(false);
    const { id } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetchUserById(id);
                setName(response.name);
                setEmail(response.email);
                setPassword(response.password);
            } catch (error) {
                console.error("Error in fetching the user data", error);
            }
        };
        fetchUserData();
    }, [id]);

    const updateData = async (e) => {
        e.preventDefault();
        setSpinner(true);
        const updatedUser = { name, email, password };

        try {
            await updateUser(id, updatedUser);
            nav('/state/table');
            setName('');
            setEmail("");
            setPassword("");
            setSpinner(false);
        } catch (error) {
            console.error("Error updating the user", error);
            setSpinner(false);
        }
    };
    return (
        <>
        {spinner && <Spinner/>}
        <div className="container mt-5 pt-3 d-flex justify-content-center text-white">
            <form onSubmit={updateData} className='form  p-5 rounded-5 shadow'>
                <h1 className='text-center text-dark'>Edit</h1>
                <div className="">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div className="">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        name="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type="submit" className="btn btn-success mt-4 w-100 ">Update</button>
            </form>
        </div>
        </>
    );
};

export default StateEdit;
