import React from 'react';
import {ImageForm} from '../../src/model/ImageForm';
import {mountWrap, shallowWrap} from './contextWrap';
import Dropzone from 'react-dropzone';
import {Image} from "semantic-ui-react";

const setup = ({...props}) => {
    const wrapper = shallowWrap(
        <ImageForm {...props} />
    );

    return {
        props,
        wrapper
    }
};

describe('ImageForm Shallow Rendering Test', () => {

    it('should render itself correctly', function () {
        const {wrapper} = setup({
            imgUrl: ''
        });
        expect(wrapper.find(Dropzone).exists()).toEqual(true);
    });

    //todo add more
});