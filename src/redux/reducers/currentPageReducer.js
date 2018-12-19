import {
    SWITCH_INDEX,
    SWITCH_PUBLISH,
    SWITCH_HOME,
    SWITCH_REGISTER,
    SWITCH_LOGIN,
    ILLEGAL_ACCESS, CLOSE_ILLEGAL_ACCESS
} from "../actions/actionTypes";

const initialState = {
    home: 'active item',
    index: 'item',
    publish: 'item',
    login: 'item',
    register: 'item',
    illegal: false
};

export default function currentPage(state = initialState, action) {
    switch (action.type) {
        case SWITCH_HOME:
            return {...state, home: 'active item', index: 'item', publish: 'item', login: 'item', register: 'item'};
        case SWITCH_INDEX:
            return {...state, home: 'item', index: 'active item', publish: 'item', login: 'item', register: 'item'};
        case SWITCH_PUBLISH:
            return {...state, home: 'item', index: 'item', publish: 'active item', login: 'item', register: 'item'};
        case SWITCH_LOGIN:
            return {...state, home: 'item', index: 'item', publish: 'item', login: 'active item', register: 'item'};
        case SWITCH_REGISTER:
            return {...state, home: 'item', index: 'item', publish: 'item', login: 'item', register: 'active item'};
        case ILLEGAL_ACCESS:
            return {...state, illegal: true};
        case CLOSE_ILLEGAL_ACCESS:
            return {...state, illegal: false};
        default:
            return state;
    }
}