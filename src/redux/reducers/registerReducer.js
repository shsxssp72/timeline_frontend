import { REGISTER_SUCCESS, REGISTER_FAIL, CHANGE_REG_PASS, CHANGE_REG_NICK, CHANGE_REG_NAME} from "../actions";

let initialState = {
    displayname: '',
    username: '',
    password: '',
    registered: false
};

export default function registerReducer(state=initialState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {...state, registered: true, displayname: '', username: '', password: ''};
        case REGISTER_FAIL:
            return {...state, registered: false};
        case CHANGE_REG_NAME:
            return {...state, username: action.payload};
        case CHANGE_REG_NICK:
            return {...state, displayname: action.payload};
        case CHANGE_REG_PASS:
            return {...state, password: action.payload};
        default:
            return state;
    }
}