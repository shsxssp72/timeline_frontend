import { GET_TIMELINE, UPDATE, MORE } from "./actionTypes";

export function updateEvents(end) {
    return {
        type: UPDATE,
        payload: end
    }
}

export function moreEvents(start) {
    return {
        type: MORE,
        payload: start
    }
}

export function getTimeline(token, start, end) {
    return async (dispatch) => {
        let content = {
            end: end,
            start: start,
            user_id: 0
        };

        await fetch('http://192.168.1.101:8080/api/content/detail/by_period', {
            method: 'POST',
            body: JSON.stringify(content),
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
            },
        }).then( response =>
            response.json()
        ).then( data => {
            console.log(data);
            dispatch({type: GET_TIMELINE, payload: data.entity_list})
        }).catch(error => {
            console.log(error);
        })
    }
}
