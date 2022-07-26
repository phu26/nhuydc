import HomePage from "./pages/HomePage"
import Login from "./pages/login/index";
import React,{useState,useEffect} from 'react';
import {
  BrowserRouter as Router,

  Route,
  Routes ,
  Navigate,
} from "react-router-dom";

function App()
{
  const search = window.location.search;
  const params = new URLSearchParams(search);
 
  const [user, setUser] = useState(null)
  if(params.get('code') )
  {
    const foo = params.get('code');
    console.log(foo);
  
  }
  
  return(
    <Router>
        <Routes>
        <Route exact path="/"
          element={user ? <HomePage /> : <Login />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
     
      
      </Routes>
    </Router>
  )
}

export default App;