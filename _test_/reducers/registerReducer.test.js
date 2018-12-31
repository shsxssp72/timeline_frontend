import reducer from '../../src/redux/reducers/registerReducer';
import * as types from '../../src/redux/actions/actionTypes';

const initialState = {
    'displayname': '',
    'username': '',
    'password': '',
    'failed': false,
    'agreed': false
};

describe('registerReducer test', () => {

    it('should return initialState', function () {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle CHANGE_REG_NAME', function () {
        expect(reducer(initialState, {
            'type': types.CHANGE_REG_NAME,
            'payload': 'username'
        })).toEqual({
            'displayname': '',
            'username': 'username',
            'password': '',
            'failed': false,
            'agreed': false
        });
    });

    it('should handle CHANGE_REG_NICK', function () {
        expect(reducer(initialState, {
            'type': types.CHANGE_REG_NICK,
            'payload': 'displayname'
        })).toEqual({
            'displayname': 'displayname',
            'username': '',
            'password': '',
            'failed': false,
            'agreed': false
        });
    });

    it('should handle CHANGE_REG_PASS', function () {
        expect(reducer(initialState, {
            'type': types.CHANGE_REG_PASS,
            'payload': 'password'
        })).toEqual({
            'displayname': '',
            'username': '',
            'password': 'password',
            'failed': false,
            'agreed': false
        });
    });

    it('should handle CHANGE_AGREED', function () {
        expect(reducer(initialState, {
            'type': types.CHANGE_AGREED
        })).toEqual({
            'displayname': '',
            'username': '',
            'password': '',
            'failed': false,
            'agreed': true
        });
    });

    it('should handle REGISTER_SUCCESS', function () {
        expect(reducer({
            'displayname': 'displayname',
            'username': 'username',
            'password': 'password',
            'failed': false,
            'agreed': true
        }, {
            'type': types.REGISTER_SUCCESS
        })).toEqual({
            'displayname': '',
            'username': '',
            'password': '',
            'failed': false,
            'agreed': false
        });
    });

    it('should handle REGISTER_FAIL', function () {
        expect(reducer(initialState, {
            'type': types.REGISTER_FAIL
        })).toEqual({
            'displayname': '',
            'username': '',
            'password': '',
            'failed': true,
            'agreed': false
        });
    });

    it('should handle CLOSE_REGISTER_FAIL', function () {
        expect(reducer({
            'displayname': '',
            'username': '',
            'password': '',
            'failed': true,
            'agreed': false
        }, {
            'type': types.CLOSE_REGISTER_FAIL
        })).toEqual({
            'displayname': '',
            'username': '',
            'password': '',
            'failed': false,
            'agreed': false
        });
    });
});