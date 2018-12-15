import {SWITCH_HISTORY, SWITCH_INDEX, SWITCH_LOGIN, SWITCH_PUBLISH, SWITCH_HOME} from "../actions";

const initialState = {
    home: 'active item',
    index: 'item',
    publish: 'item',
    history: 'item',
    login: 'item'
};

export default function currentPage(state=initialState, action) {
    switch (action.type) {
        case SWITCH_HOME:
            return {...state, home: 'active item', index: 'item', publish: 'item', history: 'item', login: 'item'};
        case SWITCH_INDEX:
            return {...state, home: 'item', index: 'active item', publish: 'item', history: 'item', login: 'item'};
        case SWITCH_PUBLISH:
            return {...state, home: 'item', index: 'item', publish: 'active item', history: 'item', login: 'item'};
        case SWITCH_HISTORY:
            return {...state, home: 'item', index: 'item', publish: 'item', history: 'active item', login: 'item'};
        case SWITCH_LOGIN:
            return {...state, home: 'item', index: 'item', publish: 'item', history: 'item', login: 'active item'};
        default:
            return state;
    }
}