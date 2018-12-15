import React from 'react';
import ReactDOM from 'react-dom';
import {
	Route,
	BrowserRouter,
	Router
} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux';
import Home from "./components/home";
import TLE from "./components/time-line-events";
import LoginForm from "./model/login";
import RegisterForm from "./model/register";
import Publish from "./components/publish";
import History from "./components/history";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<App />
				<Route exact path="/" component={Home} />
				<Route path="/index" component={TLE} />
				<Route path="/login" component={LoginForm} />
				<Route path="/publish" component={Publish} />
				<Route path="/history" component={History} />
				<Route path="/register" component={RegisterForm} />
			</div>
		</BrowserRouter>
	</Provider>, document.getElementById('root'));