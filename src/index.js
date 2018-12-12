import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './component/menu'
import TLE from './component/time-line-events'
import LoginForm from "./model/login";

ReactDOM.render(
	<div>
		<Menu />
		<TLE />
	</div>

	,document.getElementById('root')
);