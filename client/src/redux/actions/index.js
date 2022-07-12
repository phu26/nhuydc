import {createActions ,createAction} from 'redux-actions';


export const getType =(reduxAction) =>{
    console.log(reduxAction)
return reduxAction().type;
};


export const getAuth = createActions({
    getAuthRequest:  (payload) => payload,
    getAuthSuccess: (payload) => payload,
    getAuthFailure: (err) =>err, 
});