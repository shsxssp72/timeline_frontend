import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CHANGE_REG_PASS,
    CHANGE_REG_NICK,
    CHANGE_REG_NAME,
    CLOSE_REGISTER_FAIL, CHANGE_AGREED
} from "../actions/actionTypes";

let initialState = {
    displayname: '',
    username: '',
    password: '',
    failed: false,
    agreed: false
};

export default function registerReducer(state=initialState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {...state, failed: false, displayname: '', username: '', password: '', agreed: false};
        case REGISTER_FAIL:
            return {...state, failed: true};
        case CHANGE_REG_NAME:
            return {...state, username: action.payload};
        case CHANGE_REG_NICK:
            return {...state, displayname: action.payload};
        case CHANGE_REG_PASS:
            return {...state, password: action.payload};
        case CLOSE_REGISTER_FAIL:
            return {...state, failed: false};
        case CHANGE_AGREED:
            return {...state, agreed: !state.agreed};
        default:
            return state;
    }
}