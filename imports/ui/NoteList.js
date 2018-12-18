import {Meteor} from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import {Accounts} from "meteor/accounts-base";
import {createContainer} from "meteor/react-meteor-data";
import PropTypes from "prop-types";
import {Notes} from '../api/notes';
import NoteListHeader from "./NoteListHeader";
import NoteListItem from "./NoteListItem";
import NoteListEmptyItem from "./NoteListEmptyItem";
import { Session } from 'meteor/session';


export const NoteList = (props) => {
    return (
        <div className="item-List">
          <NoteListHeader/>
          { props.notes.length === 0 ? <NoteListEmptyItem/> : undefined }
          {props.notes.map((note) => {
            return <NoteListItem key={note._id} note={note}/>;
          })}
          NoteList { props.notes.length }
        </div>
      );
};

renderNoteListItems = (props) => {

  return (
    <div>
      <NoteListHeader/>
      { props.notes.length === 0 ? <NoteListEmptyItem/> : undefined }
      {props.notes.map((note) => {
        return <NoteListItem key={note._id} note={note}/>;
      })}
      NoteList { props.notes.length }
    </div>
  );

    
};


NoteList.propTypes ={
    notes: PropTypes.array.isRequired
}

export default createContainer( () => {
    const selectedNoteId = Session.get('selectedNoteId');
      Meteor.subscribe('notes');
      return {
          notes: Notes.find({}, { sort: { updatedAt : -1 } }).fetch().map( (note) => {
              return {
                ...note,
                selected: selectedNoteId === note._id
              };
          })
      }
  }, NoteList);