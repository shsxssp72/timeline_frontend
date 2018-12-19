import {
    GET_TIMELINE,
    UPDATE,
    MORE,
    TIMELINE_INIT,
    START_UPDATE,
    STOP_UPDATE,
    START_MORE,
    STOP_MORE
} from "../actions/actionTypes";


let initialState = {
    currentEvents: [],
    start: '',
    end: '',
    updating: false,
    more_ing: false
};

export default function timelineEvents(state=initialState, action) {
    switch (action.type) {
        case TIMELINE_INIT:
            let startTime = new Date();
            startTime = Object.assign(startTime, action.payload);
            let year = startTime.getFullYear();
            startTime.setFullYear(year-1);
            let endTime1 = new Date(action.payload);
            endTime1.setDate(endTime1.getDate()+1);
            return {...state, start: startTime, end: endTime1};
        case GET_TIMELINE:
            let arr = action.payload.map((item, index) => {
                let publish = new Date(Date.parse(item.publishTime));
                return { name: item.displayName, time: publish.toDateString(), content: item.content, img: ''}
            });
            return {...state, currentEvents: arr};
        case UPDATE:
            let endTime2 = new Date(action.payload);
            endTime2.setDate(endTime2.getDate()+1);
            return {...state, end: endTime2};
        case MORE:
            return {...state, start: action.payload};
        case START_UPDATE:
            return {...state, updating: true};
        case STOP_UPDATE:
            return {...state, updating: false};
        case START_MORE:
            return {...state, more_ing: true};
        case STOP_MORE:
            return {...state, more_ing: false};
        default:
            return state;
    }
}