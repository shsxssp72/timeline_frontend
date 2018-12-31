import React from 'react';
import {SubmitButton} from '../../src/model/SubmitButton';
import {mountWrap, shallowWrap} from './contextWrap';

const setup = ({...props}) => {
    const wrapper = shallowWrap(
        <SubmitButton {...props}/>
    );

    return {
        props,
        wrapper
    };
};

describe('SubmitButton Shallow Rendering Test', () => {

    it('should render itself correctly', function () {
        const {wrapper} = setup({});
        expect(wrapper.find('[size=\'large\']').exists()).toEqual(true);
    });

    it('should call onLogin when button is clicked and it is login', function () {
        const {props, wrapper} = setup({
            name: 'Login',
            username: 'username',
            password: 'password',
            onLogin: jest.fn()
        });
        const button = wrapper.find('[size=\'large\']');
        button.simulate('click');
        expect(props.onLogin).toBeCalled();
    });

    it('should call onRegister when button is clicked and it is register and infomation is valid', function () {
        const {props, wrapper} = setup({
            name: 'Register',
            displayname: 'displayName',
            regname: 'username',
            regpassword: 'password',
            agreed: true,
            onRegister: jest.fn(),
            registerFailed: jest.fn()
        });
        const button = wrapper.find('[size=\'large\']');
        button.simulate('click');
        expect(props.onRegister).toBeCalled();
    });

    it('should call registerFailed when it is not agreed', function () {
        const {props, wrapper} = setup({
            name: 'Register',
            displayname: 'displayName',
            regname: 'username',
            regpassword: 'password',
            agreed: false,
            onRegister: jest.fn(),
            registerFailed: jest.fn()
        });
        const button = wrapper.find('[size=\'large\']');
        button.simulate('click');
        expect(props.registerFailed).toBeCalled();
    });

    it('should call registerFailed when displayname is empty', function () {
        const {props, wrapper} = setup({
            name: 'Register',
            displayname: '',
            regname: 'username',
            regpassword: 'password',
            agreed: true,
            onRegister: jest.fn(),
            registerFailed: jest.fn()
        });
        const button = wrapper.find('[size=\'large\']');
        button.simulate('click');
        expect(props.registerFailed).toBeCalled();
    });

    it('should call registerFailed when displayname is more than 15 characters', function () {
        const {props, wrapper} = setup({
            name: 'Register',
            displayname: 'aaaaaaaaaaaaaaaaa',
            regname: 'username',
            regpassword: 'password',
            agreed: true,
            onRegister: jest.fn(),
            registerFailed: jest.fn()
        });
        const button = wrapper.find('[size=\'large\']');
        button.simulate('click');
        expect(props.registerFailed).toBeCalled();
    });

    it('should call registerFailed when regname is empty', function () {
        const {props, wrapper} = setup({
            name: 'Register',
            displayname: 'displayname',
            regname: '',
            regpassword: 'password',
            agreed: true,
            onRegister: jest.fn(),
            registerFailed: jest.fn()
        });
        const button = wrapper.find('[size=\'large\']');
        button.simulate('click');
        expect(props.registerFailed).toBeCalled();
    });

    it('should call registerFailed when regname is more than 15 characters', function () {
        const {props, wrapper} = setup({
            name: 'Register',
            displayname: 'displayname',
            regname: 'aaaaaaaaaaaaaaaaa',
            regpassword: 'password',
            agreed: true,
            onRegister: jest.fn(),
            registerFailed: jest.fn()
        });
        const button = wrapper.find('[size=\'large\']');
        button.simulate('click');
        expect(props.registerFailed).toBeCalled();
    });

    it('should call registerFailed when regpassword is empty', function () {
        const {props, wrapper} = setup({
            name: 'Register',
            displayname: 'displayname',
            regname: 'username',
            regpassword: '',
            agreed: true,
            onRegister: jest.fn(),
            registerFailed: jest.fn()
        });
        const button = wrapper.find('[size=\'large\']');
        button.simulate('click');
        expect(props.registerFailed).toBeCalled();
    });

    it('should call registerFailed when regpassword is more than 255 characters', function () {
        const {props, wrapper} = setup({
            name: 'Register',
            displayname: 'displayname',
            regname: 'username',
            regpassword: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
                'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
                'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            agreed: true,
            onRegister: jest.fn(),
            registerFailed: jest.fn()
        });
        const button = wrapper.find('[size=\'large\']');
        button.simulate('click');
        expect(props.registerFailed).toBeCalled();
    });
});