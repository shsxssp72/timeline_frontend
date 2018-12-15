import { combineReducers } from 'redux';
import currentPage from './currentPageReducer';
import eventsUpdate from './currentEventsReducer';

let rootReducer = combineReducers({
   _currentPage: currentPage,
   _eventsUpdate: eventsUpdate
});

export default rootReducer;