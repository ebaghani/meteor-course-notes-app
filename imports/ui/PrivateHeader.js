import {Meteor} from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {Accounts} from "meteor/accounts-base";
import {createContainer} from "meteor/react-meteor-data";

export const PrivateHeader = (props) => {
    return(
        <div className="title-bar">
            <div className="title-bar__content">
            <h1 className="header__title">{props.title}</h1>
            <button className="button--link-text" onClick={ () => { props.handleLogout()} }>Logout</button>
            </div>
        </div>
    )
}

export default createContainer(() => {
    return {
        handleLogout: () => Accounts.logout()
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
    handleLogout: PropTypes.func.isRequired
  };