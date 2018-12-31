import reducer from '../../src/redux/reducers/currentPageReducer';
import * as types from '../../src/redux/actions/actionTypes';

const initialState = {
    'home': 'active item',
    'index': 'item',
    'publish': 'item',
    'login': 'item',
    'register': 'item',
    'illegal': false
};

describe('currentPageReducer test', () => {

    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle SWITCH_HOME', function () {
        expect(reducer({
            'home': 'item',
            'index': 'active item',
            'publish': 'item',
            'login': 'item',
            'register': 'item',
            'illegal': false
        }, {
            'type': types.SWITCH_HOME
        })).toEqual({
            'home': 'active item',
            'index': 'item',
            'publish': 'item',
            'login': 'item',
            'register': 'item',
            'illegal': false
        });
    });

    it('should handle SWITCH_INDEX', function () {
        expect(reducer(initialState, {
            'type': types.SWITCH_INDEX
        })).toEqual({
            'home': 'item',
            'index': 'active item',
            'publish': 'item',
            'login': 'item',
            'register': 'item',
            'illegal': false
        });
    });

    it('should handle SWITCH_PUBLISH', function () {
        expect(reducer(initialState, {
            'type': types.SWITCH_PUBLISH
        })).toEqual({
            'home': 'item',
            'index': 'item',
            'publish': 'active item',
            'login': 'item',
            'register': 'item',
            'illegal': false
        });
    });

    it('should handle SWITCH_LOGIN', function () {
        expect(reducer(initialState, {
            'type': types.SWITCH_LOGIN
        })).toEqual({
            'home': 'item',
            'index': 'item',
            'publish': 'item',
            'login': 'active item',
            'register': 'item',
            'illegal': false
        });
    });

    it('should handle SWITCH_REGISTER', function () {
        expect(reducer(initialState, {
            'type': types.SWITCH_REGISTER
        })).toEqual({
            'home': 'item',
            'index': 'item',
            'publish': 'item',
            'login': 'item',
            'register': 'active item',
            'illegal': false
        });
    });

    it('should handle ILLEGAL_ACCESS', function () {
        expect(reducer(initialState, {
            'type': types.ILLEGAL_ACCESS
        })).toEqual({
            'home': 'active item',
            'index': 'item',
            'publish': 'item',
            'login': 'item',
            'register': 'item',
            'illegal': true
        });
    });

    it('should handle CLOSE_ILLEGAL_ACCESS', function () {
        expect(reducer({
            'home': 'active item',
            'index': 'item',
            'publish': 'item',
            'login': 'item',
            'register': 'item',
            'illegal': true
        }, {
            'type': types.CLOSE_ILLEGAL_ACCESS
        })).toEqual({
            'home': 'active item',
            'index': 'item',
            'publish': 'item',
            'login': 'item',
            'register': 'item',
            'illegal': false
        });
    });
});