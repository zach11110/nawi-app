import axios from './axios';
import chat from '../components/Chat1';
export const setmessage = async (data) => {
    try {
        console.log(data);
        const response = await axios.post('http://192.168.1.7:8000/api/setmessage', data);
        localStorage.setItem('token' , response.data.data.token);
        return response.data.data.user;
    } catch (error) {
        throw new Error(error.response.data.error)
    }
}

// export const getProfile = async () => {
//     try {
//         const response = await axios.get('/auth/profile', {
//             headers:{
//                 Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//         });
//         return response.data.data;
//     } catch (error) {
//         throw new Error(error.response.data.error)
//     }
// }

// export const updateProfile = async (data) => {
//     try {
//         const response = await axios.put('/auth/profile', data, {
//             headers:{
//                 Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//         });
//         return response.data.data;
//     } catch (error) {
//         throw new Error(error.response.data.error)
//     }
// }