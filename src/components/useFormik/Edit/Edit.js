import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';


import { useFormik } from 'formik';
import * as Yup from 'yup';
import { fetchUserById, updateUser } from '../../Services/mockApis';
import Spinner from '../../Spinner/Spinner';

const Edit = () => {
    const [spinner, setSpinner] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

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
                await updateUser(id, values);
                navigate('/table');
                resetForm();
                setSpinner(false);
            } catch (error) {
                console.error("Error updating the user", error);
                setSpinner(false);
            }
        }
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetchUserById(id);
                formik.setValues({
                    name: response.name,
                    email: response.email,
                    password: response.password,
                });
            } catch (error) {
                console.error("Error in fetching the user data", error);
            }
        };
        fetchUserData();
    }, [id, formik.setValues]);

    return (
        <>
            {spinner && <Spinner/>}
            <div className="container mt-5 pt-3 d-flex justify-content-center text-white">
                <form onSubmit={formik.handleSubmit} className='form p-5 rounded-5 formBg shadow'>
                    <h1 className='text-center text-dark'>Edit</h1>
                    <div className="">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="text-danger">{formik.errors.name}</div>
                        ) : null}
                    </div>
                    <div className="">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-danger">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-danger">{formik.errors.password}</div>
                        ) : null}
                    </div>
                  
                        <button type="submit" className="btn btn-success w-100 mt-4">Update</button>
                    
                </form>
            </div>
        </>
    );
};

export default Edit;
