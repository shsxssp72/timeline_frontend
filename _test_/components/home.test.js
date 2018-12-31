import React from "react";
import { Home } from "../../src/components/home/home";
import {mountWrap, shallowWrap} from './contextWrap';
import {Button} from 'semantic-ui-react';

const setup = ({...props}) => {
    const wrapper = shallowWrap(
        <Home {...props} />
    );
    return {
        props,
        wrapper
    }
};

describe('Home Shallow Rendering Test', () => {

    it('should render itself correctly', function () {
        const {wrapper} = setup({});
        expect(wrapper.find('[content=\'Time-Line\']').exists()).toEqual(true);
        expect(wrapper.find('[content=\'Record every bit of your life\']').exists()).toEqual(true);
        expect(wrapper.find('[size=\'huge\']').exists()).toEqual(true);
        expect(wrapper.find('[name="arrow right"]').exists()).toEqual(true);
    });

    it('should call switchIndex when Get Started is clicked', function () {
        const {props, wrapper} = setup({
            switchIndex: jest.fn()
        });
        const getStarted = wrapper.find('[to="/main"]');
        getStarted.simulate('click');
        expect(props.switchIndex).toBeCalled();
    });

    it('should show illegal message when illegal access', function () {
        const {wrapper} = setup({
            illegal: true
        });
        expect(wrapper.find('[className=\'ui floating message\']').exists()).toEqual(true);
    });

    it('should not show illegal message when is not illegal access', function () {
        const {wrapper} = setup({
            illegal: false
        });
        expect(wrapper.find('[className=\'ui floating message\']').exists()).toEqual(false);
    });

    it('should call closeIllegalAccess when close icon is clicked', function () {
        const {props, wrapper} = setup({
            illegal: true,
            closeIllegalAccess: jest.fn()
        });
        const closeIcon = wrapper.find('[className=\'close icon\']');
        closeIcon.simulate('click');
        expect(props.closeIllegalAccess).toBeCalled();
    });
});