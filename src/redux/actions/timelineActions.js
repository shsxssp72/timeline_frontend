import {
    GET_TIMELINE,
    UPDATE,
    MORE,
    CONTENTID_SET, UPDATE_TIMELINE, MORE_TIMELINE
} from "./actionTypes";

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
            let copy = data.entity_list.slice();
            let id = copy.pop().contentId;
            dispatch({type: CONTENTID_SET, payload: id});
            dispatch({type: GET_TIMELINE, payload: data.entity_list})
        }).catch(error => {
            console.log(error);
        })
    }
}

export function updateTimeline(token, start, end) {
    alert(start+end);                           //todo update problem
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
        }).then(response =>
            response.json()
        ).then( data => {
            console.log(data);
            dispatch({type: UPDATE_TIMELINE, payload: data.entity_list})
        }).catch( error => {
            console.log(error);
        });
    }
}

export function moreTimeline(token, start, num) {
    return async (dispatch) => {
        let content = {
            contentStartId: start,
            end: '',
            numberToRetrieve: num,
            start: '',
            user_id: 0
        };

        await fetch('http://192.168.1.101:8080/api/content/detail/by_id_range', {
            method: 'POST',
            body: JSON.stringify(content),
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
            },
        }).then(response =>
            response.json()
        ).then( data => {
            console.log(data);
            dispatch({type: MORE_TIMELINE, payload: data.entity_list})
        }).catch( error => {
            console.log(error);
        });
    }
}
