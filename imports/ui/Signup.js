import {Meteor} from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import {Accounts} from "meteor/accounts-base";
import {createContainer} from "meteor/react-meteor-data";
import PropTypes from "prop-types";



export class Signup extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        // count: 0,
        error: ''
      }
    }

    decrement() {
      this.setState({
         count: this.state.count-1 
        })
    }

    onSubmit(e) {
      e.preventDefault();

      let email = this.refs.email.value.trim();
      let password = this.refs.password.value.trim();

      if (password.length < 9) {
        return this.setState({error: "Password must be more than 9 characters"});
      }

      this.props.createUser({email, password}, (err) => {  
        if (err) {
          this.setState({ error: err.reason});
        } else {
          this.setState({ error: ''});
        }
      });
    

      // this.setState({
      //   error: "Something went wrong" 
      //  });

    }

    render() {
      return (
              <div className="boxed-view">
                <div className="boxed-view__box">
                  <h1>Join</h1>
                  {/* <p>{this.state.count}</p> */}
                  {this.state.error ? <p>{this.state.error}</p> : undefined}
                  <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
                    <input type="email" ref="email" name="email" placeholder="Email" />
                    <input type="password" ref="password" password="password" placeholder="Password" />
                    <button className="button">Create Account</button>
                  </form>
                  {/* <button onClick ={ () => {this.setState({ count: this.state.count+1 })} } >+1</button> */}
                  {/* <button onClick ={this.decrement.bind(this)} >-1</button> */}

                  <Link to="/">Already have an account?</Link>
                </div>
              </div>);
    }
  }

  Signup.propTypes ={
    createUser: PropTypes.func.isRequired
  }

  export default createContainer( () => {
    return {
      createUser: Accounts.createUser
    };
  }, Signup);