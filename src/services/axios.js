/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

// import { BASE_URL } from '../CONSTANTS'

const instance = axios.create({
  // baseURL: BASE_URL  
});
export const setupInterceptors =(navigate)=>{
  instance.interceptors.request.use((request) =>request)
  instance.interceptors.response.use((response) => response, (error) => {
    
    const redirectToLoginCodes = [400,401,403]
    if (redirectToLoginCodes.includes(error.response.status)){
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  })
}

export default instance;