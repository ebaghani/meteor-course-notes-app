import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Route, Redirect } from 'react-router-dom';
import { Session } from 'meteor/session';

 export const NoteRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} render={(props) => {
     if  (isAuthenticated)  {
         console.log(props);
         Session.set('selectedNoteId', props.match.params.id);
       return (<Component {...props} />);
      } else {
         return (<Redirect to="/" />)
      }
    }} />
  );
 export default createContainer(() => ({
  isAuthenticated: !!Meteor.userId()
}), NoteRoute);


