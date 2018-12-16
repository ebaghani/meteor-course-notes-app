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

const NoteListEmptyItem = () => {
    return (
        <div className="item">
            <p  className="item__status-message">
                No Notes Found.
            </p>
        </div>
    );
}

export default NoteListEmptyItem;