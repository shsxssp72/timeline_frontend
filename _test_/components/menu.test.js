import React from 'react';
import {StickyMenu} from '../../src/components/menu/menu';
import {mountWrap, shallowWrap} from './contextWrap';

const setup = ({...props}) => {
    const wrapper = shallowWrap(
        <StickyMenu {...props} />
    );
    return {
        props,
        wrapper
    };
};

describe('Menu Shallow Rendering Test', () => {

    it('should render itself correctly', function () {
        const {wrapper} = setup({});
        expect(wrapper.find('[to="/"]').exists()).toEqual(true);
        expect(wrapper.find('[to="/main"]').exists()).toEqual(true);
        expect(wrapper.find('[to="/publish"]').exists()).toEqual(true);
    });

    it('should call switchHome when Home is clicked', function () {
        const {props, wrapper} = setup({
            switchHome: jest.fn()
        });
        const home = wrapper.find('[to="/"]');
        home.simulate('click');
        expect(props.switchHome).toBeCalled();
    });

    it('should call switchIndex when Timeline is clicked', function () {
        const {props, wrapper} = setup({
            switchIndex: jest.fn()
        });
        const timeline = wrapper.find('[to="/main"]');
        timeline.simulate('click');
        expect(props.switchIndex).toBeCalled();
    });

    it('should call switchPublish when publish is clicked', function () {
        const {props, wrapper} = setup({
            switchPublish: jest.fn()
        });
        const publish = wrapper.find('[to="/publish"]');
        publish.simulate('click');
        expect(props.switchPublish).toBeCalled();
    });

    it('should not show login and register when islogin', function () {
        const {wrapper} = setup({
            isLogin: true
        });
        expect(wrapper.find('[to="/login"]').exists()).toEqual(false);
        expect(wrapper.find('[to="/register"]').exists()).toEqual(false);
    });

    it('should call switchLogin when login is clicked', function () {
        const {props, wrapper} = setup({
            isLogin: false,
            switchLogin: jest.fn()
        });
        const login = wrapper.find('[to="/login"]');
        login.simulate('click');
        expect(props.switchLogin).toBeCalled();
    });

    it('should call switchRegister when register is clicked', function () {
        const {props, wrapper} = setup({
            isLogin: false,
            switchRegister: jest.fn()
        });
        const register = wrapper.find('[to="/register"]');
        register.simulate('click');
        expect(props.switchRegister).toBeCalled();
    });

    it('should not show logout when is not login', function () {
        const {wrapper} = setup({
            isLogin: false
        });
        expect(wrapper.find('[content=\'Log out\']').exists()).toEqual(false);
    });

    it('should call onLogOut when logout is clicked', function () {
        const {props, wrapper} = setup({
            isLogin: true,
            onLogOut: jest.fn()
        });
        const logout = wrapper.find('[content=\'Log out\']');
        logout.simulate('click');
        expect(props.onLogOut).toBeCalled();
    });

    it('should call onUpdate and updateTimeline when isLogin and timeline is clicked', function () {
        let end = new Date();
        const {props, wrapper} = setup({
            end: end,
            isLogin: true,
            switchIndex: jest.fn(),
            onUpdate: jest.fn(),
            updateTimeline: jest.fn()
        });
        const timeline = wrapper.find('[to="/main"]');
        timeline.simulate('click');
        expect(props.onUpdate).toBeCalled();
        expect(props.updateTimeline).toBeCalled();
    });
});