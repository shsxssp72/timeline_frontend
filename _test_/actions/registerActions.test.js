import * as types from '../../src/redux/actions/actionTypes';
import * as registerActions from '../../src/redux/actions/registerActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import {BASE_URL} from '../../src/constants';

const middlewares = [thunk],
    mockStore = configureMockStore(middlewares);

global.fetch = require('node-fetch');

describe('RegisterActions Test', () => {

    it('should create an action to register fail', function () {
        const expectedAction = {
            'type': types.REGISTER_FAIL
        };

        expect(registerActions.registerFailed()).toEqual(expectedAction);
    });

    it('should create an action to change agreed', function () {
        const expectedAction = {
            'type': types.CHANGE_AGREED
        };

        expect(registerActions.changeAgreed()).toEqual(expectedAction);
    });

    it('should create an action to change register name', function () {
        const expectedAction = {
            'type': types.CHANGE_REG_NAME,
            'payload': 'username'
        };

        expect(registerActions.changeRegName('username')).toEqual(expectedAction);
    });

    it('should create an action to change register nickname', function () {
        const expectedAction = {
            'type': types.CHANGE_REG_NICK,
            'payload': 'nickname'
        };

        expect(registerActions.changeRegNick('nickname')).toEqual(expectedAction);
    });

    it('should create an action to change register password', function () {
        const expectedAction = {
            'type': types.CHANGE_REG_PASS,
            'payload': 'password'
        };

        expect(registerActions.changeRegPass('password')).toEqual(expectedAction);
    });

    it('should create an action to close register fail', function () {
        const expectedAction = {
            'type': types.CLOSE_REGISTER_FAIL
        };

        expect(registerActions.closeRegisterFail()).toEqual(expectedAction);
    });

    afterEach(() => {
        nock.cleanAll();
    });

    it('should create REGISTER_SUCCESS when fetching register have been succeeded', function () {
        nock(BASE_URL)
            .post('/register', {'displayName': 'displayname', 'password': 'password', 'username': 'username'})
            .reply(200, {'result': 'success'});

        const expectedActions = [{
                'type': types.REGISTER_SUCCESS
            }],

            store = mockStore({});

        return store.dispatch(registerActions.register('displayname', 'password', 'username')).then(
            () => {
                expect(store.getActions()).toEqual(expectedActions);
            }
        );
    });

    it('should create REGISTER_FAIL when fetching register have been failed', function () {
        nock(BASE_URL)
            .post('/register', {'displayName': 'displayname', 'password': 'password', 'username': 'username'})
            .reply(401, {'result': 'failed'});

        const expectedActions = [{
                'type': types.REGISTER_FAIL
            }],

            store = mockStore({});

        return store.dispatch(registerActions.register('displayname', 'password', 'username')).then(
            () => {
                expect(store.getActions()).toEqual(expectedActions);
            }
        );
    });
});