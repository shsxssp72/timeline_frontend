import React from 'react';
import {LoginForm} from '../../src/model/login';
import {mountWrap, shallowWrap} from './contextWrap';

const setup = ({...props}) => {
    const wrapper = shallowWrap(
        <LoginForm {...props} />
    );

    return {
        props,
        wrapper
    };
};

describe('LoginForm Shallow Rendering Test', () => {

    it('should render itself correctly', function () {
        const {wrapper} = setup({});
        expect(wrapper.find('[as=\'h2\']').exists()).toEqual(true);
        expect(wrapper.find('[placeholder=\'Username\']').exists()).toEqual(true);
        expect(wrapper.find('[placeholder=\'Password\']').exists()).toEqual(true);
        expect(wrapper.find('[name=\'Login\']').exists()).toEqual(true);
        expect(wrapper.find('[name=\'help\']').exists()).toEqual(true);
        expect(wrapper.find('[to=\'/register\']').exists()).toEqual(true);
    });

    it('should call onChangeUsername when username change', function () {
        const {props, wrapper} = setup({
            onChangeUsername: jest.fn()
        });
        const username = wrapper.find('[placeholder=\'Username\']');
        username.simulate('change');
        expect(props.onChangeUsername).toBeCalled();
    });

    it('should call onChangePassword when password change', function () {
        const {props, wrapper} = setup({
            onChangePassword: jest.fn()
        });
        const password = wrapper.find('[placeholder=\'Password\']');
        password.simulate('change');
        expect(props.onChangePassword).toBeCalled();
    });

    it('should call switchRegister when New to Us is clicked', function () {
        const {props, wrapper} = setup({
            switchRegister: jest.fn()
        });
        const newToUS = wrapper.find('[to=\'/register\']');
        newToUS.simulate('click');
        expect(props.switchRegister).toBeCalled();
    });

    it('should show login fail message when login failed', function () {
        const {wrapper} = setup({
            failed: true
        });
        expect(wrapper.find('[negative=true]').exists()).toEqual(true);
    });

    it('should call closeLoginFail when close icon is clicked', function () {
        const {props, wrapper} = setup({
            failed: true,
            closeLoginFail: jest.fn()
        });
        const closeIcon = wrapper.find('[className=\'close icon\']');
        closeIcon.simulate('click');
        expect(props.closeLoginFail).toBeCalled();
    });
});