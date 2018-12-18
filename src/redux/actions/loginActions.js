import history from '../../history';
import {
    CHANGE_PASSWORD,
    CHANGE_USERNAME,
    CLOSE_LOGIN_FAIL,
    LOG_OUT,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    TIMELINE_INIT,
    USERID_SET
} from "./actionTypes";
import { switchHome } from "./pageSwitchActions";

export function login(password, username) {
    // return (dispatch) => {
    //
    //     let qs = require('qs');
    //     axios.post('http://192.168.1.101:8080/login', data).then((response) => {
    //         console.log(response);
    //     }).catch((error) => {
    //         alert(error);
    //     });
    // }
    return async (dispatch) => {
        let content = {password: password, username: username};
        await fetch('http://192.168.1.101:8080/login', {
            method: 'POST',
            body: JSON.stringify(content),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json()
        ).then(data=>{
            console.log(data);
            if(data.status === '200'){
                dispatch({type: LOGIN_SUCCESS, payload: data.jwtToken});
                dispatch({type: USERID_SET, payload: data.result});
                let end = new Date();
                dispatch({type: TIMELINE_INIT, payload: end});
                history.push('/');
                dispatch(switchHome());
            }else{
                dispatch({type: LOGIN_FAIL})
            }
        }).catch(error=>{
            console.log(error);
            dispatch({type: LOGIN_FAIL})
        });
    }
}

export function changePassword(password) {
    return {
        type: CHANGE_PASSWORD,
        payload: password
    }
}

export function changeUsername(username) {
    return {
        type: CHANGE_USERNAME,
        payload: username
    }
}

export function logOut() {
    return {
        type: LOG_OUT
    }
}

export function closeLoginFail() {
    return {
        type: CLOSE_LOGIN_FAIL
    }
}