// import axios from './axios';

// export const getUsers = async () => {
//     try {
//         const response = await axios.get('/users', {
//             headers:{
//                 Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//         });
//         return response.data.data;
//     } catch (error) {
//         throw new Error(error.response.data.error)
//     }
// }

// export const getUser = async (id) => {
//     try {
//         const response = await axios.get(`/users/${id}`, {
//             headers:{
//                 Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//         });
//         return response.data.data;
//     } catch (error) {
//         throw new Error(error.response.data.error)
//     }
// }

// export const addUser = async (data) => {
//     try {
//         const response = await axios.post('/users', data, {
//             headers:{
//                 Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//         });
//         return response.data.data;
//     } catch (error) {
//         throw new Error(error.response.data.error)
//     }
// }


// export const updateUser = async (data) => {
//     try {
//         const response = await axios.put(`/users/${data.id}`, data, {
//             headers:{
//                 Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//         });
//         return response.data.data;
//     } catch (error) {
//         throw new Error(error.response.data.error)
//     }
// }

// export const deleteUser = async (id) => {
//     try {
//         const response = await axios.delete(`/users/${id}`, {
//             headers:{
//                 Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//         });
//         return response.data.data;
//     } catch (error) {
//         throw new Error(error.response.data.error)
//     }
// }