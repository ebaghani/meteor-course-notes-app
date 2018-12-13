import { Meteor } from 'meteor/meteor';
import React from 'react';
import Signup from './../ui/Signup';
import Dashboard from './../ui/Dashboard';
import NotFound from './../ui/NotFound';
import Login from './../ui/Login';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard'];

export const onAuthChange = (isAuthenticated) => {
	console.log('isAuthenticated', isAuthenticated);

	const pathname = history.location.pathname;
	console.log(pathname);
	console.log(authenticatedPages.includes(pathname));
	if (isAuthenticated && unauthenticatedPages.includes(pathname)) {
		console.log('replacing with dashboard');
		return history.replace('/dashboard')
	} else if (!isAuthenticated && authenticatedPages.includes(pathname)) {
		console.log('replacing with /');
		return history.replace('/');
	}
}

export const routes = (
	<Router history={ history }>
		<Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="*" component={NotFound}/>
        </Switch>
    </Router>
);