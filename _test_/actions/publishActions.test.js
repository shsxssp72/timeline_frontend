import * as types from '../../src/redux/actions/actionTypes';
import * as publishActions from '../../src/redux/actions/publishActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import request from 'superagent';
import nocker from 'superagent-nock';
import {BASE_URL} from '../../src/constants';
import {PICTURE} from '../../src/redux/actions/actionTypes';

const superagentNock = nocker(request),
    middlewares = [thunk],
    mockStore = configureMockStore(middlewares);

global.fetch = require('node-fetch');

describe('PublishActions Test', () => {

    it('should create an action to change text', function () {
        const expectedAction = {
            'type': types.CHANGE_TEXT,
            'payload': 'text'
        };

        expect(publishActions.changeText('text')).toEqual(expectedAction);
    });

    it('should create an action to publish fail', function () {
        const expectedAction = {
            'type': types.PUBLISH_FAIL
        };

        expect(publishActions.publishFail()).toEqual(expectedAction);
    });

    it('should create an action to close publish fail', function () {
        const expectedAction = {
            'type': types.CLOSE_PUBLISH_FAIL
        };

        expect(publishActions.closePublishFail()).toEqual(expectedAction);
    });

    it('should create an action to close publish success', function () {
        const expectedAction = {
            'type': types.CLOSE_PUBLISH_SUCCESS
        };

        expect(publishActions.closePublishSuccess()).toEqual(expectedAction);
    });

    afterEach(() => {
        nock.cleanAll();
    });

    // it('should create PICTURE when upload picture have been succeeded', function () {        //todo upload picture action
    //     superagentNock('https://api.cloudinary.com/v1_1/hlps10425')
    //         .post('/image/upload', { upload_preset: 'nzw8sov3', file: 'file'})
    //         .reply(200, {secure_url: 'secure_url'});
    //
    //     const expectedActions = [
    //         {type: PICTURE, payload: 'secure_url'}
    //     ];
    //
    //     const store = mockStore({});
    //
    //     return store.dispatch(publishActions.uploadPicture('file')).then(() => {
    //         expect(store.getActions()).toEqual(expectedActions);
    //     });
    // });

    it('should create PUBLISH_SUCCESSS when publish has been succeeded', function () { //todo PUBLISH_SUCCESS action
        const token = 'token';

        nock(BASE_URL, {
            'reqheaders': {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${token}`
            }
        }).post('/api/content/create', {
            'content': JSON.stringify({
                'data': 'content',
                'imgUrl': 'imgUrl'
            }),
            'contentId': '',
            'displayName': '',
            'publishTime': 'publishTime',
            'userId': 'userid'
        }).reply(200, {'result': 'success'});

        const expectedActions = [
                {'type': types.PUBLISH_SUCCESS},
                {'type': types.PICTURE, 'payload': ''}
            ],

            store = mockStore({'text': '', 'imgUrl': '', 'failed': false, 'successful': false});

        return store.dispatch(publishActions.publishContent('token', 'userid', 'content', 'imgUrl'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });
});