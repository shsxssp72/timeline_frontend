import { GET_TIMELINE, UPDATE, MORE } from "./actionTypes";
import history from '../../history';

export function getTimeline(token, start, end) {
    return async (dispatch) => {
        let content = {
            end: end,
            start: start,
            user_id: 0
        };

        await fetch('http://192.168.1.101:8080/api/content/detail/by_period', {
            method: 'GET',
            body: JSON.stringify(content),
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }
}
