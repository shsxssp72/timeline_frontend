import React from 'react';
import {RegisterForm} from '../../src/model/register';
import {mountWrap, shallowWrap} from './contextWrap';

const setup = ({...props}) => {
    const wrapper = shallowWrap(
        <RegisterForm {...props}/>
    );

    return {
        props,
        wrapper
    };
};

describe('RegisterForm Shallow Rendering Test', () => {

    it('should render itself correctly', function () {
        const {wrapper} = setup({});
        expect(wrapper.find('[as=\'h2\']').exists()).toEqual(true);
        expect(wrapper.find('[header=\'Welcome to our site!\']').exists()).toEqual(true);
        expect(wrapper.find('[icon=\'user\']').exists()).toEqual(true);
        expect(wrapper.find('[icon=\'address card\']').exists()).toEqual(true);
        expect(wrapper.find('[icon=\'lock\']').exists()).toEqual(true);
        expect(wrapper.find('[label=\'I agree to the terms and conditions\']').exists()).toEqual(true);
        expect(wrapper.find('[name=\'Register\']').exists()).toEqual(true);
        expect(wrapper.find('[name=\'help\']').exists()).toEqual(true);
        expect(wrapper.find('[to=\'/login\']').exists()).toEqual(true);
    });

    it('should call onChangeRegName when register username change', function () {
        const {props, wrapper} = setup({
            onChangeRegName: jest.fn()
        });
        const username = wrapper.find('[icon=\'user\']');
        username.simulate('change');
        expect(props.onChangeRegName).toBeCalled();
    });

    it('should call onChangeRegNick when register nickname change', function () {
        const {props, wrapper} = setup({
            onChangeRegNick: jest.fn()
        });
        const nickname = wrapper.find('[icon=\'address card\']');
        nickname.simulate('change');
        expect(props.onChangeRegNick).toBeCalled();
    });

    it('should call onChangeRegPass when register password', function () {
        const {props, wrapper} = setup({
            onChangeRegPass: jest.fn()
        });
        const password = wrapper.find('[icon=\'lock\']');
        password.simulate('change');
        expect(props.onChangeRegPass).toBeCalled();
    });

    it('should call changeAgreed when agree change', function () {
        const {props, wrapper} = setup({
            changeAgreed: jest.fn()
        });
        const agreed = wrapper.find('[label=\'I agree to the terms and conditions\']');
        agreed.simulate('change');
        expect(props.changeAgreed).toBeCalled();
    });

    it('should call switchLogin when already have an account is clicked', function () {
        const {props, wrapper} = setup({
            switchLogin: jest.fn()
        });
        const ahaa = wrapper.find('[to=\'/login\']');
        ahaa.simulate('click');
        expect(props.switchLogin).toBeCalled();
    });

    it('should show register fail message when register fail', function () {
        const {wrapper} = setup({
            failed: true
        });
        expect(wrapper.find('[negative=true]').exists()).toEqual(true);
    });

    it('should call closeRegisterFail when close icon is clicked', function () {
        const {props, wrapper} = setup({
            failed: true,
            closeRegisterFail: jest.fn()
        });
        const closeIcon = wrapper.find('[className=\'close icon\']');
        closeIcon.simulate('click');
        expect(props.closeRegisterFail).toBeCalled();
    });
});