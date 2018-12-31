import reducer from '../../src/redux/reducers/publishReducer';
import * as types from '../../src/redux/actions/actionTypes';

const initialState = {
    'text': '',
    'imgUrl': '',
    'failed': false,
    'successful': false
};

describe('publishReducer test', () => {

    it('should return initialState', function () {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle CHANGE_TEXT', function () {
        expect(reducer(initialState, {
            'type': types.CHANGE_TEXT,
            'payload': 'text'
        })).toEqual({
            'text': 'text',
            'imgUrl': '',
            'failed': false,
            'successful': false
        });
    });

    it('should handle PICTURE', function () {
        expect(reducer(initialState, {
            'type': types.PICTURE,
            'payload': 'imgUrl'
        })).toEqual({
            'text': '',
            'imgUrl': 'imgUrl',
            'failed': false,
            'successful': false
        });
    });

    it('should handle PUBLISH_SUCCESS', function () {
        expect(reducer({
            'text': 'text',
            'imgUrl': '',
            'failed': false,
            'successful': false
        }, {
            'type': types.PUBLISH_SUCCESS
        })).toEqual({
            'text': '',
            'imgUrl': '',
            'failed': false,
            'successful': true
        });
    });

    it('should handle PUBLISH_FAIL', function () {
        expect(reducer(initialState, {
            'type': types.PUBLISH_FAIL
        })).toEqual({
            'text': '',
            'imgUrl': '',
            'failed': true,
            'successful': false
        });
    });

    it('should handle CLOSE_PUBLISH_FAIL', function () {
        expect(reducer({
            'text': '',
            'imgUrl': '',
            'failed': true,
            'successful': false
        }, {
            'type': types.CLOSE_PUBLISH_FAIL
        })).toEqual({
            'text': '',
            'imgUrl': '',
            'failed': false,
            'successful': false
        });
    });

    it('should handle CLOSE_PUBLISH_SUCCESS', function () {
        expect(reducer({
            'text': '',
            'imgUrl': '',
            'failed': false,
            'successful': true
        }, {
            'type': types.CLOSE_PUBLISH_SUCCESS
        })).toEqual({
            'text': '',
            'imgUrl': '',
            'failed': false,
            'successful': false
        });
    });
});