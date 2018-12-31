import { BrowserRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import PropTypes from 'prop-types';

const router = {
        'history': new BrowserRouter().history,
        'route': {
            'location': {},
            'match': {}
        }
    },

    createContext = () => ({
        'context': { router },
        'childContextTypes': { 'router': PropTypes.shape({}) }
    });

export function mountWrap(node) {
    return mount(node, createContext());
}

export function shallowWrap(node) {
    return shallow(node, createContext());
}