import React from 'react';
import Menu from '../components/menu';
import {
	Route,
	BrowserRouter,
	Switch
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Home from "../components/home";
import TLE from "../components/time-line-events";
import LoginForm from "../model/login";
import Publish from "../components/publish";
import History from "../components/history";

export default () => {
	return (
		<div>
			<Menu/>
			<div>

			</div>
		</div>
	);
}