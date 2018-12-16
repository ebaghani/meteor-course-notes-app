import {Meteor} from "meteor/meteor";
import React from "react";
import {createContainer} from "meteor/react-meteor-data";
import PropTypes from "prop-types";
import moment from 'moment';

const NoteListItem = (props) => {
 return (
    <div>
        <h5>{props.note.title || "untitled note"}</h5>
        <p>{ moment(props.note.updatedAt).format('M/DD/YY') }</p>
    </div>
 );
}

NoteListItem.propTypes ={
    note: PropTypes.object.isRequired
}

export default NoteListItem;