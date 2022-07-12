import {takeLatest,call, put} from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* getAuthSaga(action){

    try {
        console.log("")
         const post = yield call(api.getAuth,action.payload);
         console.log('[getAuthSaga - auth]', post);
         yield put(actions.getAuth.getAuthSuccess());


         
    } catch (error) {
         console.log(error);
         yield put(actions.getAuth.getAuthFailure(error));
    }
 
}

function* mySaga(){
    yield takeLatest(actions.getAuth.getAuthRequest,getAuthSaga); 

}

export default mySaga;