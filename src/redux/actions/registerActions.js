import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CHANGE_REG_NAME,
    CHANGE_REG_NICK,
    CHANGE_REG_PASS, CLOSE_REGISTER_FAIL, CHANGE_AGREED
} from "./actionTypes";
import history from '../../history';
import { BASE_URL } from "../../constants";

export function register(displayname, password, username) {
    return async (dispatch) => {
        let content = {
            displayName: displayname,
            password: password,
            username: username
        };

        await fetch(BASE_URL+'/register', {
            method: 'POST',
            body: JSON.stringify(content),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response =>
            response.json()
        ).then(data => {
            console.log(data);
            if(data.result === 'success'){
                dispatch({type: REGISTER_SUCCESS});
                history.push('./login');
            }else{
                dispatch({type: REGISTER_FAIL});
            }

        }).catch(error => {
            console.log(error);
            dispatch({type: REGISTER_FAIL});
        });
    }
}

export function registerFailed() {
    return {
        type: REGISTER_FAIL
    }
}

export function changeAgreed() {
    return {
        type: CHANGE_AGREED
    }
}

export function changeRegName(username) {
    return {
        type: CHANGE_REG_NAME,
        payload: username
    }
}

export function changeRegNick(displayname) {
    return {
        type: CHANGE_REG_NICK,
        payload: displayname
    }
}

export function changeRegPass(password) {
    return {
        type: CHANGE_REG_PASS,
        payload: password
    }
}

export function closeRegisterFail() {
    return {
        type: CLOSE_REGISTER_FAIL
    }
}