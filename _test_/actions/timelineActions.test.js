import * as types from '../../src/redux/actions/actionTypes';
import * as timelineActions from '../../src/redux/actions/timelineActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import {BASE_URL} from '../../src/constants';

const middlewares = [thunk],
    mockStore = configureMockStore(middlewares);

global.fetch = require('node-fetch');

describe('TimelineActions Test', () => {

    it('should create an action to update', function () {
        const expectedAction = {
            'type': types.UPDATE,
            'payload': 'end'
        };

        expect(timelineActions.updateEvents('end')).toEqual(expectedAction);
    });

    it('should create an action to more', function () {
        const expectedAction = {
            'type': types.MORE,
            'payload': 'start'
        };

        expect(timelineActions.moreEvents('start')).toEqual(expectedAction);
    });

    afterEach(() => {
        nock.cleanAll();
    });

    it('should create CONTENTID_SET and GET_TIMELINE when getTimeline', function () {
        nock(BASE_URL)
            .post('/api/content/detail/by_period', {'end': 'end', 'start': 'start', 'user_id': 0})
            .reply(200, {'entity_list': [{'contentId': 0}]});

        const expectedActions = [
                {'type': types.CONTENTID_SET, 'payload': 0},
                {'type': types.GET_TIMELINE, 'payload': [{'contentId': 0}]}
            ],

            store = mockStore({});

        return store.dispatch(timelineActions.getTimeline('token', 'start', 'end')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should create UPDATE_TIMELINE when updateTimeline', function () {
        nock(BASE_URL)
            .post('/api/content/detail/by_period', {'end': 'end', 'start': 'start', 'user_id': 0})
            .reply(200, {'entity_list': [{'contentId': 0}]});

        const expectedActions = [
                {'type': types.UPDATE_TIMELINE, 'payload': [{'contentId': 0}]}
            ],

            store = mockStore({});

        return store.dispatch(timelineActions.updateTimeline('token', 'start', 'end')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should create MORE_TIMELINE when moreTimeline', function () {
        nock(BASE_URL)
            .post('/api/content/detail/by_id_range', {'contentStartId': 2, 'end': '', 'numberToRetrieve': 1, 'start': '', 'user_id': 0})
            .reply(200, {'entity_list': [{'contentId': 0}]});

        const expectedActions = [
                {'type': types.MORE_TIMELINE, 'payload': [{'contentId': 0}]}
            ],

            store = mockStore({});

        return store.dispatch(timelineActions.moreTimeline('token', 2, 1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});