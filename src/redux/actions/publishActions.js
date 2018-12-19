import {CHANGE_TEXT, PUBLISH_SUCCESS, PUBLISH_FAIL, CLOSE_PUBLISH_FAIL, CLOSE_PUBLISH_SUCCESS} from "./actionTypes";


export function publishContent(token, userid, content) {
    alert(content);                                     //todo publish problem
    return async (dispatch) => {
        let data = {
            content: encodeURI(encodeURI(content)),
            contentId: '',
            displayName: '',
            publishTime: '',
            userId: userid
        };

        await fetch('http://192.168.1.101:8080/api/content/create', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization' : `Bearer ${token}`
            },
        }).then( response =>
            response.json()
        ).then( data => {
            console.log(data);
            dispatch({type: PUBLISH_SUCCESS});
            dispatch(changeText(''));
        }).catch( error => {
            console.log(error);
            dispatch({type: PUBLISH_FAIL});
        });
    }
}

export function changeText(text) {
    return {
        type: CHANGE_TEXT,
        payload: text
    }
}

export function publishFail() {
    return {
        type: PUBLISH_FAIL
    }
}

export function closePublishFail() {
    return {
        type: CLOSE_PUBLISH_FAIL
    }
}

export function closePublishSuccess() {
    return {
        type: CLOSE_PUBLISH_SUCCESS
    }
}