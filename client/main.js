import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import "./main.html";
import {routes, onAuthChange } from './../imports/routes/routes.js';
import { Session } from 'meteor/session';
import "../imports/startup/simple-schema-configuration";



Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
	console.log('VISIBILITY:', Session.get('visibility'));
	onAuthChange(isAuthenticated);
});


Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});

 

