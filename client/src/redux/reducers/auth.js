import { INIT_STATE } from "../../constant";
import { getAuth,getType } from "../actions";



export default function authReducers(state = INIT_STATE.auth, action){
    console.log(action.type)
    switch(action.type){
       
              case getType(getAuth.getAuthSuccess):
           return {
               ...state,
               data: [...state.data, action.payload],
         };
        default:
        return state;
    }
}