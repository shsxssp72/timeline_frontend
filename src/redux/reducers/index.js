import { combineReducers } from 'redux';
import currentPage from './currentPageReducer';
import eventsUpdate from './currentEventsReducer';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';

let rootReducer = combineReducers({
   _currentPage: currentPage,
   _eventsUpdate: eventsUpdate,
   _loginReducer: loginReducer,
   _registerReducer: registerReducer
});

export default rootReducer;