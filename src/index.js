import React from 'react';
import ReactDOM from 'react-dom';
import {
	Route,
	BrowserRouter
} from 'react-router-dom';
import App from './App';
import TLE from './components/time-line-events';
import Publish from './components/publish';
import History from './components/history';
import LoginForm from './model/login';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route path="/" component={App} />
			<Route path="/index" component={TLE} />
			<Route path="/login" component={LoginForm} />
			<Route path="/publish" component={Publish} />
			<Route path="/history" component={History} />
		</div>
	</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA