import {
    GET_TIMELINE,
    UPDATE,
    MORE,
    TIMELINE_INIT,
    CONTENTID_SET, UPDATE_TIMELINE, MORE_TIMELINE
} from "../actions/actionTypes";


let initialState = {
    currentEvents: [],
    start: '',
    end: '',
    contentid: 0
};

export default function timelineEvents(state=initialState, action) {
    switch (action.type) {
        case TIMELINE_INIT:
            let startTime = new Date();
            startTime = Object.assign(startTime, action.payload);
            let year = startTime.getFullYear();
            startTime.setFullYear(year-1);
            let endTime1 = new Date(action.payload);
            return {...state, start: startTime, end: endTime1};
        case GET_TIMELINE:
            let arr1 = action.payload.map((item, index) => {
                let publish = new Date(Date.parse(item.publishTime));
                let realContent1 = JSON.parse(item.content);
                return { name: item.displayName, time: publish.toDateString(), content: realContent1.data, img: realContent1.imgUrl}
            });
            return {...state, currentEvents: arr1};
        case UPDATE_TIMELINE:
            let arr2 = action.payload.map((item, index) => {
                let publish = new Date(Date.parse(item.publishTime));
                let realContent2 = JSON.parse(item.content);
                return { name: item.displayName, time: publish.toDateString(), content: realContent2.data, img: realContent2.imgUrl}
            });
            let copy = arr2.concat(state.currentEvents);
            return {...state, currentEvents: copy};
        case MORE_TIMELINE:
            let arr3 = action.payload.map((item, index) => {
                let publish = new Date(Date.parse(item.publishTime));
                let realContent3 = JSON.parse(item.content);
                return { name: item.displayName, time: publish.toDateString(), content: realContent3.data, img: realContent3.imgUrl}
            });
            let copy2 = state.currentEvents.concat(arr3);
            return {...state, currentEvents: copy2};
        case UPDATE:
            let startTime2 = new Date(state.end);
            return {...state, start: startTime2, end: action.payload};
        case MORE:
            return {...state, contentid: action.payload};
        case CONTENTID_SET:
            return {...state, contentid: action.payload};
        default:
            return state;
    }
}