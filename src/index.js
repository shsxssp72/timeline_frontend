import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    BrowserRouter,
    Router,Switch,Redirect
} from 'react-router-dom';
import history from './history';
import { Provider } from 'react-redux';
import store from './redux';
import Home from "./components/home";
import TLE from "./components/time-line-events";
import LoginForm from "./model/login";
import RegisterForm from "./model/register";
import Publish from "./components/publish";
import requireAuthentication from "./components/checkAuth";
import StickyMenu from "./components/menu/menu";

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<div>
				{/*<App />*/}
				<StickyMenu/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/main" component={requireAuthentication(TLE)}/>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/publish" component={requireAuthentication(Publish)}/>
                    <Route path="/register" component={RegisterForm}/>
                    <Redirect to="/"/>
                </Switch>
			</div>
		</Router>
	</Provider>, document.getElementById('root'));