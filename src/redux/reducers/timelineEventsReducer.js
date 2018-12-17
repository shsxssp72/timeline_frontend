import {GET_TIMELINE, UPDATE, MORE, TIMELINE_INIT} from "../actions/actionTypes";


let initialState = {
    currentEvents: [],
    start: '',
    end: '',
};

export default function timelineEvents(state=initialState, action) {
    switch (action.type) {
        case TIMELINE_INIT:
            let startTime = new Date();
            startTime = Object.assign(startTime, action.payload);
            let year = startTime.getFullYear();
            startTime.setFullYear(year-100);
            return {...state, start: startTime, end: action.payload};
        case GET_TIMELINE:
            let arr = action.payload.map((item, index) => (
                { name: item.displayName, time: item.publishTime, content: item.content, img: ''}
            ));
            return {...state, currentEvents: arr};
        case UPDATE:
            return {...state, end: action.payload};
        case MORE:
            return {...state, start: action.payload};
        default:
            return state;
    }
}