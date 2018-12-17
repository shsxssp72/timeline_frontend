import { LOGIN_SUCCESS, LOGIN_FAIL, LOG_OUT, CHANGE_USERNAME, CHANGE_PASSWORD, USERID_SET} from "../actions/actionTypes";

let initialState = {
    username: '',
    password: '',
    isLogin: false,
    jwtToken: '',
    userid: ''
};

export default function loginReducer(state=initialState, action) {
    switch (action.type) {
        case CHANGE_USERNAME:
            return {...state, username: action.payload};
        case CHANGE_PASSWORD:
            return {...state, password: action.payload};
        case LOGIN_SUCCESS:
            return {...state, isLogin: true, jwtToken: action.payload};
        case USERID_SET:
            return {...state, userid: action.payload};
        case LOGIN_FAIL:
            return {...state, isLogin: false};
        case LOG_OUT:
            return {...state, username: '', password: '', isLogin: false, jwtToken: '', userid: ''};
        default:
            return state;
    }
}
