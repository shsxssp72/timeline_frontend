import * as types from '../../src/redux/actions/actionTypes';
import * as loginActions from '../../src/redux/actions/loginActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import {BASE_URL} from '../../src/constants';

const middlewares = [thunk],
    mockStore = configureMockStore(middlewares);

global.fetch = require('node-fetch');

describe('LoginActions Test', () => {

    it('should create an action to change username', () => {
        const username = 'username',
            expectedAction = {
                'type': types.CHANGE_USERNAME,
                'payload': username
            };

        expect(loginActions.changeUsername(username)).toEqual(expectedAction);
    });

    it('should create an action to change password', () => {
        const password = 'password',
            expectedAction = {
                'type': types.CHANGE_PASSWORD,
                'payload': password
            };

        expect(loginActions.changePassword(password)).toEqual(expectedAction);
    });

    it('should create an action to logout', () => {
        const expectedAction = {
            'type': types.LOG_OUT
        };

        expect(loginActions.logOut()).toEqual(expectedAction);
    });

    it('should create an action to close login fail', () => {
        const expectedAction = {
            'type': types.CLOSE_LOGIN_FAIL
        };

        expect(loginActions.closeLoginFail()).toEqual(expectedAction);
    });

    afterEach(() => {
        nock.cleanAll();
    });

    it('should create LOGIN_FAIL when fetching login has been failed', () => {
        nock(BASE_URL)
            .post('/login', { 'username': 'username', 'password': 'password'})
            .reply(401, { 'status': '401', 'result': 'userid', 'jwtToken': 'jwtToken'});

        const expectedActions = [
                { 'type': types.LOGIN_FAIL }
            ],
            store = mockStore({ 'result': '', 'jwtToken': '' });

        return store.dispatch(loginActions.login('password', 'username')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should create LOGIN_SUCCESS when fetching login has been done', () => { //todo LOGIN_SUCCESS action
        nock(BASE_URL)
            .post('/login', { 'username': 'username', 'password': 'password'})
            .reply(200, { 'status': '200', 'result': 'userid', 'jwtToken': 'jwtToken'});

        let end = new Date();
        const expectedActions = [
                { 'type': types.LOGIN_SUCCESS, 'payload': 'jwtToken'},
                { 'type': types.USERID_SET, 'payload': 'userid'},
                { 'type': types.TIMELINE_INIT, 'payload': end},
                { 'type': types.CLOSE_ILLEGAL_ACCESS},
                { 'type': types.SWITCH_HOME}
            ],
            store = mockStore({ 'result': '', 'jwtToken': '' });

        return store.dispatch(loginActions.login('password', 'username')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});