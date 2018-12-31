import reducer from '../../src/redux/reducers/timelineEventsReducer';
import * as types from '../../src/redux/actions/actionTypes';

const initialState = {
    'currentEvents': [],
    'start': '',
    'end': '',
    'contentid': 0
};

describe('timelineEventsReducer test', () => {

    it('should return initialState', function () {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should TIMELINE_INIT', function () {
        let end = new Date(),
            start = new Date(end),
            year = start.getFullYear()-1;

        start.setFullYear(year);
        expect(reducer(initialState, {
            'type': types.TIMELINE_INIT,
            'payload': end
        })).toEqual({
            'currentEvents': [],
            'start': start,
            'end': end,
            'contentid': 0
        });
    });

    it('should handle GET_TIMELINE', function () {
        let publishTime = new Date();

        expect(reducer(initialState, {
            'type': types.GET_TIMELINE,
            'payload': [
                {
                    'displayName': 'displayName',
                    'publishTime': publishTime,
                    'content': JSON.stringify({
                        'data': 'data',
                        'imgUrl': 'imgUrl'
                    })
                }
            ]
        })).toEqual({
            'currentEvents': [
                {
                    'name': 'displayName',
                    'time': publishTime.toDateString(),
                    'content': 'data',
                    'img': 'imgUrl'
                }
            ],
            'start': '',
            'end': '',
            'contentid': 0
        });
    });

    it('should handle UPDATE_TIMELINE', function () {
        let publishTime = new Date();

        expect(reducer({
            'currentEvents': [
                {
                    'name': '',
                    'time': '',
                    'content': '',
                    'img': ''
                }
            ],
            'start': '',
            'end': '',
            'contentid': 0
        }, {
            'type': types.UPDATE_TIMELINE,
            'payload': [
                {
                    'displayName': 'displayName',
                    'publishTime': publishTime,
                    'content': JSON.stringify({
                        'data': 'data',
                        'imgUrl': 'imgUrl'
                    })
                }
            ]
        })).toEqual({
            'currentEvents': [
                {
                    'name': 'displayName',
                    'time': publishTime.toDateString(),
                    'content': 'data',
                    'img': 'imgUrl'
                },
                {
                    'name': '',
                    'time': '',
                    'content': '',
                    'img': ''
                }
            ],
            'start': '',
            'end': '',
            'contentid': 0
        });
    });

    it('should handle MORE_TIMELINE', function () {
        let publishTime = new Date();

        expect(reducer({
            'currentEvents': [
                {
                    'name': '',
                    'time': '',
                    'content': '',
                    'img': ''
                }
            ],
            'start': '',
            'end': '',
            'contentid': 0
        }, {
            'type': types.MORE_TIMELINE,
            'payload': [
                {
                    'displayName': 'displayName',
                    'publishTime': publishTime,
                    'content': JSON.stringify({
                        'data': 'data',
                        'imgUrl': 'imgUrl'
                    })
                }
            ]
        })).toEqual({
            'currentEvents': [
                {
                    'name': '',
                    'time': '',
                    'content': '',
                    'img': ''
                },
                {
                    'name': 'displayName',
                    'time': publishTime.toDateString(),
                    'content': 'data',
                    'img': 'imgUrl'
                }
            ],
            'start': '',
            'end': '',
            'contentid': 0
        });
    });

    it('should handle UPDATE', function () {
        let end = new Date(),
            start = new Date(end),
            year = start.getFullYear()-1;

        start.setFullYear(year);
        expect(reducer({
            'currentEvents': [],
            'start': '',
            'end': start,
            'contentid': 0
        }, {
            'type': types.UPDATE,
            'payload': end
        })).toEqual({
            'currentEvents': [],
            'start': start,
            'end': end,
            'contentid': 0
        });
    });

    it('should handle MORE', function () {
        expect(reducer(initialState, {
            'type': types.MORE,
            'payload': 5
        })).toEqual({
            'currentEvents': [],
            'start': '',
            'end': '',
            'contentid': 5
        });
    });

    it('should handle OCNTENTID_SET', function () {
        expect(reducer(initialState, {
            'type': types.CONTENTID_SET,
            'payload': 6
        })).toEqual({
            'currentEvents': [],
            'start': '',
            'end': '',
            'contentid': 6
        });
    });
});