import reducer from '../../src/redux/reducers/loginReducer';
import * as types from '../../src/redux/actions/actionTypes';

const initialState = {
    'username': '',
    'password': '',
    'isLogin': false,
    'failed': false,
    'jwtToken': '',
    'userid': ''
};

describe('loginReducer test', () => {

    it('should return initialState', function () {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle CHANGE_USERNAME', function () {
        expect(reducer(initialState, {
            'type': types.CHANGE_USERNAME,
            'payload': 'username'
        })).toEqual({
            'username': 'username',
            'password': '',
            'isLogin': false,
            'failed': false,
            'jwtToken': '',
            'userid': ''
        });
    });

    it('should handle CHANGE_PASSWORD', function () {
        expect(reducer(initialState, {
            'type': types.CHANGE_PASSWORD,
            'payload': 'password'
        })).toEqual({
            'username': '',
            'password': 'password',
            'isLogin': false,
            'failed': false,
            'jwtToken': '',
            'userid': ''
        });
    });

    it('should handle LOGIN_SUCCESS', function () {
        expect(reducer(initialState, {
            'type': types.LOGIN_SUCCESS,
            'payload': 'token'
        })).toEqual({
            'username': '',
            'password': '',
            'isLogin': true,
            'failed': false,
            'jwtToken': 'token',
            'userid': ''
        });
    });

    it('should handle USERID_SET', function () {
        expect(reducer(initialState, {
            'type': types.USERID_SET,
            'payload': 'userid'
        })).toEqual({
            'username': '',
            'password': '',
            'isLogin': false,
            'failed': false,
            'jwtToken': '',
            'userid': 'userid'
        });
    });

    it('should handle LOGIN_FAIL', function () {
        expect(reducer(initialState, {
            'type': types.LOGIN_FAIL
        })).toEqual({
            'username': '',
            'password': '',
            'isLogin': false,
            'failed': true,
            'jwtToken': '',
            'userid': ''
        });
    });

    it('should handle LOG_OUT', function () {
        expect(reducer({
            'username': 'username',
            'password': 'password',
            'isLogin': true,
            'failed': false,
            'jwtToken': 'token',
            'userid': 'userid'
        }, {
            'type': types.LOG_OUT
        })).toEqual({
            'username': '',
            'password': '',
            'isLogin': false,
            'failed': false,
            'jwtToken': '',
            'userid': ''
        });
    });

    it('should handle CLOSE_LOGIN_FAIL', function () {
        expect(reducer({
            'username': '',
            'password': '',
            'isLogin': false,
            'failed': true,
            'jwtToken': '',
            'userid': ''
        }, {
            'type': types.CLOSE_LOGIN_FAIL
        })).toEqual({
            'username': '',
            'password': '',
            'isLogin': false,
            'failed': false,
            'jwtToken': '',
            'userid': ''
        });
    });
});