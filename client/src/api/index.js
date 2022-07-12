import axios from 'axios';


const URL = 'http://localhost:5000';



export const getAuth = async () => {
    try {
     
      let response = await fetch(`${URL}/test`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        
        }
      })    
      return await response.json();
    } catch(err) {
      console.log(err)
    }
  };