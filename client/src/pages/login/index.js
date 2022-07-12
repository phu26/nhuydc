import { useContext, useRef,React,useCallback } from "react";
import { CircularProgress } from "@material-ui/core";
import "./login.css";
import { getAuth } from "../../redux/actions";
import { useSelector, useDispatch } from 'react-redux';
export default function Login() {
    
    const {isFetching} = false; 
    const dispatch = useDispatch();
    const handleclick = useCallback(() => {
       
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