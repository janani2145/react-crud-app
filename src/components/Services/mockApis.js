import axios from 'axios';

const API_URL= 'https://65ae12861dfbae409a73dcb5.mockapi.io/users';


export const postUser = async (values) => {
    try {
        const response = await axios.post(API_URL, values);
        return response.data;
    } catch (error) {
        console.error('Error creating the user!', error);
    }
};
export const fetchUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

export const fetchUserById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
       
    }
};
export const updateUser = async (id, values) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, values);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
      
    }
};

export const deleteUser = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Error deleting user:', error);
      
    }
};