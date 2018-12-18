import {
    PUBLISH_SUCCESS,
    PUBLISH_FAIL,
    CHANGE_TEXT,
    CLOSE_PUBLISH_FAIL,
    CLOSE_PUBLISH_SUCCESS
} from "../actions/actionTypes";

let initialState = {
    text: '',
    failed: false,
    successful: false
};

export default function publishEvents(state=initialState, action) {
    switch (action.type) {
        case CHANGE_TEXT:
            return {...state, text: action.payload};
        case PUBLISH_SUCCESS:
            return {...state, failed: false, text: '', successful: true};
        case PUBLISH_FAIL:
            return {...state, failed: true};
        case CLOSE_PUBLISH_FAIL:
            return {...state, failed: false};
        case CLOSE_PUBLISH_SUCCESS:
            return {...state, successful: false};
        default:
            return state;
    }
}