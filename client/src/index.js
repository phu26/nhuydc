import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App';
import reducers from './redux/reducers';
import mySaga from './redux/sagas';

const sagaMiddleware =  createSagaMiddleware();
const store = createStore(reducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
    <React.StrictMode>
    
      <App/>
    
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);



