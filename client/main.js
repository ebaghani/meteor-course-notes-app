import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import "./main.html";
import {routes, history, onAuthChange } from './../imports/routes/routes.js';
import { Session } from 'meteor/session';
import "../imports/startup/simple-schema-configuration";
//import { AppRouter, history, onAuthChange } from '../imports/routes/AppRouter';




Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
	console.log('VISIBILITY:', Session.get('visibility'));
	onAuthChange(isAuthenticated);
});

Tracker.autorun(() => {
  const selectedNoteId = Session.get('selectedNoteId');
  if (selectedNoteId) {
    history.replace('/dashboard/${selectedNoteId}');
  }
});

Meteor.startup(() => {
  Session.set('selectedNoteId', undefined);
  ReactDOM.render(routes, document.getElementById('app'));
});

 

