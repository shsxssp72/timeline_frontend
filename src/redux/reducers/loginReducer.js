import { LOGIN_SUCCESS, LOGIN_FAIL, LOG_OUT, CHANGE_USERNAME, CHANGE_PASSWORD} from "../actions";

let initialState = {
    username: '',
    password: '',
    isLogin: false,
    jwtToken: ''
};

export default function loginReducer(state=initialState, action) {
    switch (action.type) {
        case CHANGE_USERNAME:
            return {...state, username: action.payload};
        case CHANGE_PASSWORD:
            return {...state, password: action.payload};
        case LOGIN_SUCCESS:
            return {...state, isLogin: true, jwtToken: action.payload};
        case LOGIN_FAIL:
            return {...state, isLogin: false};
        case LOG_OUT:
            return {...state, username: '', password: '', isLogin: false, jwtToken: ''};
        default:
            return state;
    }
}
