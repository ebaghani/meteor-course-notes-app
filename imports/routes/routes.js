import { Meteor } from 'meteor/meteor';
import React from 'react';
import Signup from './../ui/Signup';
import Dashboard from './../ui/Dashboard';
import NotFound from './../ui/NotFound';
import Login from './../ui/Login';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
export const history = createBrowserHistory();
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NoteRoute from './NoteRoute';

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

const onEnterPrivatePage = () => {
	if (!Meteor.userId()) {
	  browserHistory.replace('/');
	}
  };
  const onEnterNotePage = (nextState) => {
	if (!Meteor.userId()) {
	  browserHistory.replace('/');
	} else {
	  Session.set('selectedNoteId', nextState.params.id);
	}
  };

export const routes = (
	<Router history={ history }>
		<Switch>
          <PublicRoute exact path="/" component={Login}/>
          <PublicRoute path="/signup" component={Signup}/>
          <PrivateRoute path="/dashboard" component={Dashboard} exact={true}/>
		 		  <NoteRoute path="/dashboard/:id" component={Dashboard}/>
          <Route path="*" component={NotFound}/>
        </Switch>
    </Router>
);