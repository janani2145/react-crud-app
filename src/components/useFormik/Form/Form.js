import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { postUser } from '../../Services/mockApis';

const Form = () => {
    const [spinner, setSpinner] = useState(false);
    const nav = useNavigate();
    

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        validationSchema,

        onSubmit: async (values, { resetForm }) => {
            setSpinner(true);
            try {
                await postUser(values);
                nav('/table');
                resetForm();
            } catch (error) {
                console.error('There was an error creating the user!', error);
            } finally {
                setSpinner(false);
            }
        }
    });

    return (
        <>
            {spinner && <Spinner />}
            <div className="container mt-5 pt-4 text-white d-flex justify-content-center">
                <form onSubmit={formik.handleSubmit} className='form p-5 rounded-5 formBg'>
                    <h1 className='text-center'>Login</h1>
                 
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            // id="name"  
                            name="name"
                            value={formik.values.name}
                            placeholder='Name'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                       
                                {formik.touched.name && formik.errors.name ? (
                            <div className="text-danger">{formik.errors.name}</div>
                        ) : null}
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            // id="email"
                            name="email"
                            value={formik.values.email}
                            placeholder='Email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-danger">{formik.errors.email}</div>
                        ) : null}
                      
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            // id="password"
                            name="password"
                            value={formik.values.password}
                            placeholder='Password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-danger">{formik.errors.password}</div>
                        ) : null}
                        
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button type="submit" className="btn btn-info">Submit</button>
                    </div>
                </form>
            </div> 


        </>
    );
};

export default Form;
