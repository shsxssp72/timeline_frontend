import { PUBLISH_SUCCESS, PUBLISH_FAIL, CHANGE_TEXT} from "../actions/actionTypes";

let initialState = {
    text: '',
};

export default function publishEvents(state=initialState, action) {
    switch (action.type) {
        case CHANGE_TEXT:
            return {...state, text: action.payload};
        case PUBLISH_SUCCESS:
            return {...state, text: ''};
        case PUBLISH_FAIL:
            return {...state};
        default:
            return state;
    }
}