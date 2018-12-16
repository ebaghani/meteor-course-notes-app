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

export const NoteList = (props) => {
    return (
        <div>
            <NoteListHeader/>
            { renderNoteListItems(props) }
            {/* NoteList {props.notes.length} */}
        </div>
    )
};

renderNoteListItems = (props) => {

    if (props.notes.length === 0) {
        return (
            <div className="item">
                <p  className="item__status-message">
                    No Items Found.
                </p>
            </div>
        );
    };

    return props.notes.map( (note) => {
        //const shortUrl = Meteor.absoluteUrl(link._id);
        return <NoteListItem key={note._id} note={note}/>
       // return <p key={link._id}>{link.url}</p>;
    });
};


NoteList.propTypes ={
    notes: PropTypes.array.isRequired
}

export default createContainer( () => {
      Meteor.subscribe('notes');
      return {
          notes: Notes.find().fetch()
      }
  }, NoteList);