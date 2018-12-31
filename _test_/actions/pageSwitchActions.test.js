import * as types from '../../src/redux/actions/actionTypes';
import * as pageSwitchActions from '../../src/redux/actions/pageSwitchActions';

describe('PageSwitchActions Test', () => {

    it('should create an action to switch home', function () {
        const expectedAction = {
            'type': types.SWITCH_HOME
        };

        expect(pageSwitchActions.switchHome()).toEqual(expectedAction);
    });

    it('should create an action to switch index', function () {
        const expectedAction = {
            'type': types.SWITCH_INDEX
        };

        expect(pageSwitchActions.switchIndex()).toEqual(expectedAction);
    });

    it('should create an action to switch publish', function () {
        const expectedAction = {
            'type': types.SWITCH_PUBLISH
        };

        expect(pageSwitchActions.switchPublish()).toEqual(expectedAction);
    });

    it('should create an action to switch login', function () {
        const expectedAction = {
            'type': types.SWITCH_LOGIN
        };

        expect(pageSwitchActions.switchLogin()).toEqual(expectedAction);
    });

    it('should create an action to switch register', function () {
        const expectedAction = {
            'type': types.SWITCH_REGISTER
        };

        expect(pageSwitchActions.switchRegister()).toEqual(expectedAction);
    });

    it('should create an action to alert illegal access', function () {
        const expectedAction = {
            'type': types.ILLEGAL_ACCESS
        };

        expect(pageSwitchActions.illegalAccess()).toEqual(expectedAction);
    });

    it('should create an action to close illegal access', function () {
        const expectedAction = {
            'type': types.CLOSE_ILLEGAL_ACCESS
        };

        expect(pageSwitchActions.closeIllegalAccess()).toEqual(expectedAction);
    });
});