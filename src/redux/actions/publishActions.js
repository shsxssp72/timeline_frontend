import {CHANGE_TEXT, PUBLISH_SUCCESS, PUBLISH_FAIL} from "./actionTypes";


export function publishContent(token, userid, content) {
    return async (dispatch) => {
        let data = {
            content: content,
            contentId: '',
            displayName: '',
            publishTime: '',
            userId: userid
        };

        await fetch('http://192.168.1.101:8080/api/content/create', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
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