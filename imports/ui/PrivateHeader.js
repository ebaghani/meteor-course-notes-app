import {Meteor} from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {Accounts} from "meteor/accounts-base";
import {createContainer} from "meteor/react-meteor-data";
import { Session } from 'meteor/session';


export const PrivateHeader = (props) => {
    const navImageSrc = props.isNavOpen ? '/images/x.svg' : '/images/bars.svg';
    return(
        <div className="title-bar">
            <div className="title-bar__content">
            <img  className="header__nav-toggle" onClick={ () => { props.handleNavToggle() } } src={navImageSrc}/>
            <h1 className="header__title">{props.title}</h1>
            <button className="button--link-text" onClick={ () => { props.handleLogout()} }>Logout</button>
            </div>
        </div>
    )
}

export default createContainer(() => {
    return {
        isNavOpen : Session.get('isNavOpen'),
        handleLogout: () => {
            Session.set('selectedNoteId', undefined);
            Accounts.logout();
        },
        handleNavToggle: () => {
            Session.set('isNavOpen', !Session.get('isNavOpen'));
        }
    };
},
PrivateHeader);
//export default PrivateHeader;

// export default class PrivateHeader extends React.Component {

//     render() {
//         return (
//             <div>
//             <h1>{this.props.title}</h1>
//             <button onClick={ () => { Accounts.logout() } }>Log out</button>
//             </div>
//         )
//     };
// }

PrivateHeader.propTypes = {
    title: PropTypes.string.isRequired,
    handleLogout: PropTypes.func.isRequired,
    isNavOpen : PropTypes.bool.isRequired,
    handleNavToggle: PropTypes.func.isRequired,

  };