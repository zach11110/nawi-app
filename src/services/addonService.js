// import axios from './axios';

// export const getAnalytics = async () => {
//     try {
//         const response = await axios.get('/analytics', {
//             headers:{
//                 Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//         });
//         return response.data.data;
//     } catch (error) {
//         throw new Error(error.response.data.error)
//     }
// }

// export const getSettings = async () => {
//     try {
//         const response = await axios.get('/settings', {
//             headers:{
//                 Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//         });
//         return response.data.data;
//     } catch (error) {
//         throw new Error(error.response.data.error)
//     }
// }

// export const modifySettings = async (url , data) => {
//     try {
//         const response = await axios.post(url, data, {
//             headers:{
//                 Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//         });
//         return response.data.data;
//     } catch (error) {
//         throw new Error(error.response.data.error)
//     }
// }

// export const getStates = async () => {
//     try {
//         const response = await axios.get('/states', {
//             headers:{
//                 Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//         });
//         return response.data.data;
//     } catch (error) {
//         throw new Error(error.response.data.error)
//     }
// }

// export const getLocalities = async (state_id) => {
//     try {
//         let url = '/localities';
//         if(state_id){
//             url = `/localities?state_id=${state_id}`;
//         }
//         const response = await axios.get(url, {
//             headers:{
//                 Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//         });
//         return response.data.data;
//     } catch (error) {
//         throw new Error(error.response.data.error)
//     }
// }