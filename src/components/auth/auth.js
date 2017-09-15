import React, { Component } from "react";
import { connect } from "react-redux";
import { auth, register } from "../../ducks/reducer";

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.login = this.login.bind( this );
    this.register = this.register.bind( this );

    this.handleChange = this.handleChange.bind( this );
  }

  login() {
    const { login, history } = this.props;
    const { username, password } = this.state;
    login({ username, password }, history);
  }

  register() {
    const { register, history } = this.props;
    const { username, password } = this.state;
    register({ username, password }, history);
  }


  handleChange( prop, val ) {
    this.setState({ [prop]: val });
  }

  render() {
    return (
      <div id="Login__parent">
        <div id="Login__child">
          <input className="Login__input" type="text" placeholder="Username" onChange={ (e) => this.handleChange('username' , e.target.value) } />
          <input className="Login__input" type="password" placeholder="Password" onChange={ (e) => this.handleChange('password' , e.target.value) } />
          <div>
            <button className="Login__btn" id="Login__loginBtn" onClick={ this.login }>Login </button>
            <button className="Login__btn" id="Login__registerBtn" onClick={ this.register }>Register </button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect( state => state, { auth, register } )( Auth );