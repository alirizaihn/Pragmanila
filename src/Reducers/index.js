import MessageReducer from './newmessage.js';
import {combineReducers } from 'redux';

const allReducers = combineReducers({

    messages: MessageReducer
   
    
});
export default allReducers;


