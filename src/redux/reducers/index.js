import { combineReducers } from 'redux';
import currentPage from './currentPageReducer';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import timelineEvents from './timelineEventsReducer';
import publishEvents from './publishReducer';

let rootReducer = combineReducers({
   _currentPage: currentPage,
   _loginReducer: loginReducer,
   _registerReducer: registerReducer,
   _timelineEvents: timelineEvents,
   _publishEvents: publishEvents
});

export default rootReducer;