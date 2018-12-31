import React from 'react';
import {TLE} from '../../src/components/time-line-events/tle';
import {mountWrap, shallowWrap} from './contextWrap';

const setup = ({...props}) => {
    const wrapper = shallowWrap(
        <TLE {...props} />
    );

    return {
        props,
        wrapper
    };
};

describe('Time-line-events Shallow Rendering Test', () => {

    it('should render itself correctly', function () {
        const {wrapper} = setup({
            timelineEvents: [
                {
                    name: 'name',
                    time: 'time',
                    content: 'content',
                    img: 'img'
                }
            ]
        });
        expect(wrapper.find('[name="clock icon"]').exists()).toEqual(true);
        expect(wrapper.find('[className="content"]').exists()).toEqual(true);
        expect(wrapper.find('[content=\'Update\']').exists()).toEqual(true);
        expect(wrapper.find('[content=\'More...\']').exists()).toEqual(true);
        expect(wrapper.find('[title=\'name\']').exists()).toEqual(true);
    });

    it('should call updateTimeline and onUpdate when update is clicked', function () {
        let end = new Date();
        const {props, wrapper} = setup({
            timelineEvents: [
                {
                    name: 'name',
                    time: 'time',
                    content: 'content',
                    img: 'img'
                }
            ],
            token: 'token',
            start: 'start',
            end: end,
            updateTimeline: jest.fn(),
            onUpdate: jest.fn()
        });
        const updateButton = wrapper.find('[content=\'Update\']');
        updateButton.simulate('click');
        expect(props.updateTimeline).toBeCalled();
        expect(props.onUpdate).toBeCalled();
    });

    it('should show the bottom tooltip when reach the bottom', function () {
        const {props, wrapper} = setup({
            timelineEvents: [
                {
                    name: 'name',
                    time: 'time',
                    content: 'content',
                    img: 'img'
                }
            ],
            contentid: 0
        });
        expect(wrapper.find('[data-tooltip="You have reached the bottom"]').exists()).toEqual(true);
    });

    it('should call moreTimeline and onMore when more is clicked and there are more events', function () {
        const {props, wrapper} = setup({
            timelineEvents: [
                {
                    name: 'name',
                    time: 'time',
                    content: 'content',
                    img: 'img'
                }
            ],
            contentid: '5',
            moreTimeline: jest.fn(),
            onMore: jest.fn()
        });
        const moreButton = wrapper.find('[content=\'More...\']');
        moreButton.simulate('click');
        expect(props.moreTimeline).toBeCalled();
        expect(props.onMore).toBeCalled();
    });
});