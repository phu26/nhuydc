import axios from 'axios';


const URL = 'http://localhost:5000';

export const getAuth = () => axios.get(`${URL}/test`);