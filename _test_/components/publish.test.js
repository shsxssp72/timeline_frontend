import React from 'react';
import {Publish} from '../../src/components/publish/publish';
import {mountWrap, shallowWrap} from './contextWrap';

const setup = ({...props}) => {
    const wrapper = shallowWrap(
        <Publish {...props} />
    );

    return {
        props,
        wrapper
    };
};

describe('Publish Shallow Rendering Test', () => {

    it('should render itself correctly', function () {
        const {wrapper} = setup({});
        expect(wrapper.find('[className="ui center aligned icon header"]').exists()).toEqual(true);
        expect(wrapper.find('[name=\'pencil alternate\']').exists()).toEqual(true);
        expect(wrapper.find('[placeholder=\'less than 1000 characters\']').exists()).toEqual(true);
        expect(wrapper.find('[content=\'Submit\']').exists()).toEqual(true);
    });

    it('should call onChangeText when textarea change', function () {
        const {props, wrapper} = setup({
            onChangeText: jest.fn()
        });
        const textArea = wrapper.find('[placeholder=\'less than 1000 characters\']');
        textArea.simulate('change');
        expect(props.onChangeText).toBeCalled();
    });

    it('should call publishContent and show publish success message when publish is clicked and infomation is valid', function () {
        const {props, wrapper} = setup({
            successful: true,
            token: 'token',
            userid: '0',
            text: 'text',
            imgUrl: 'imgUrl',
            publishContent: jest.fn(),
            publishFail: jest.fn()
        });
        const publishButton = wrapper.find('[content=\'Submit\']');
        publishButton.simulate('click');
        expect(props.publishContent).toBeCalled();
        expect(wrapper.find('[positive=true]').exists()).toEqual(true);
    });

    it('should call publishFail and show publish fail message when publish is clicked and infomation is empty', function () {
        const {props, wrapper} = setup({
            failed: true,
            token: 'token',
            userid: '0',
            text: '',
            imgUrl: 'imgUrl',
            publishContent: jest.fn(),
            publishFail: jest.fn()
        });
        const publishButton = wrapper.find('[content=\'Submit\']');
        publishButton.simulate('click');
        expect(props.publishFail).toBeCalled();
        expect(wrapper.find('[negative=true]').exists()).toEqual(true);
    });

    it('should call publishFail and show publish fail message when publish is clicked and infomation is more than 1000 characters', function () {
        const {props, wrapper} = setup({
            failed: true,
            token: 'token',
            userid: '0',
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
                'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
                'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
                'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
                'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
                'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
                'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
                'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
                'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
                'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            imgUrl: 'imgUrl',
            publishContent: jest.fn(),
            publishFail: jest.fn()
        });
        const publishButton = wrapper.find('[content=\'Submit\']');
        publishButton.simulate('click');
        expect(props.publishFail).toBeCalled();
        expect(wrapper.find('[negative=true]').exists()).toEqual(true);
    });

    it('should call closePublishSuccess to close publish success message when click close icon', function () {
        const {props, wrapper} = setup({
            successful: true,
            closePublishSuccess: jest.fn()
        });
        const successMessage = wrapper.find('[positive=true]');
        const closeIcon = successMessage.find('[className=\'close icon\']');
        closeIcon.simulate('click');
        expect(props.closePublishSuccess).toBeCalled();
    });

    it('should call closePublishFail to close publish fail message when click close icon', function () {
        const {props, wrapper} = setup({
            failed: true,
            closePublishFail: jest.fn()
        });
        const failMessage = wrapper.find('[negative=true]');
        const closeIcon = failMessage.find('[className=\'close icon\']');
        closeIcon.simulate('click');
        expect(props.closePublishFail).toBeCalled();
    });
});
