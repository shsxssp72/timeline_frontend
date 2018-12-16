import React from 'react';
import ReactDOM from 'react-dom';
import {
	Route,
	BrowserRouter,
	Router
} from 'react-router-dom';
import history from './history';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux';
import Home from "./components/home";
import TLE from "./components/time-line-events";
import LoginForm from "./model/login";
import RegisterForm from "./model/register";
import Publish from "./components/publish";
import History from "./components/history";
import requireAuthentication from "./components/checkAuth";

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<div>
				<App />
				<Route exact path="/" component={Home} />
				<Route path="/index" component={requireAuthentication(TLE)} />
				<Route path="/login" component={LoginForm} />
				<Route path="/publish" component={requireAuthentication(Publish)} />
				<Route path="/history" component={requireAuthentication(History)} />
				<Route path="/register" component={RegisterForm} />
			</div>
		</Router>
	</Provider>, document.getElementById('root'));