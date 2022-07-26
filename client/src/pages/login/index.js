import { useContext, useRef,React,useCallback } from "react";
import { CircularProgress } from "@material-ui/core";
import "./login.css";
import { getAuth } from "../../redux/actions";
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';

export default function Login(props) {

  const search = window.location.search;
  const params = new URLSearchParams(search);

  if(params.get('code') )
  {
    const foo = params.get('code');
    console.log(foo);
  }
 
    const {isFetching} = false; 
    const dispatch = useDispatch();
    
    const handleclick = useCallback(() => {
       console.log("df");
        dispatch(getAuth.getAuthRequest());
        
       }, []);
    return (
   <div>
     <button className="loginButton" type="submit" onClick={handleclick} disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
   </div>
           
           
  );
}