import {CHANGE_TEXT, PUBLISH} from "../actions";

const initialState = {
    currentEvents: [
        {
            name: 'Jack',
            time: '2018/12/14下午6:50:50',
            content: 'Good Evening!',
            img: ''
        },
        {
            name: 'Marry',
            time: '2018/12/14上午6:50:50',
            content: 'Good Morning!',
            img: ''
        }
    ],
    text: ''
};

export default function eventsUpdate(state=initialState, action) {
    switch (action.type) {
        case CHANGE_TEXT:
            return Object.assign({}, state, {
                text: action.payload
            });
        case PUBLISH:
            let d = new Date();
            let f = d.toLocaleDateString();
            let s = d.toLocaleTimeString();
            let c = state.text;
            return {...state, currentEvents: [...state.currentEvents, {name: 'guest', time: f+s, content: c, img: ''}]};
        default:
            return state;
    }
}