import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Signup from './../components/Signup/Signup.js';
import * as signupActions from './../actions/signupActions.js';

class SignupContainer extends Component {
  constructor(props) {
    super(props);
  }

  updateUsername = (e) => {
    this.props.signupActions.usernameInputAction(e.target.value);
  }

  updatePassword = (e) => {
    this.props.signupActions.passwordInputAction(e.target.value);
  }

  submitSignupForm = (e) => {
    e.preventDefault();
    this.props.signupActions.submitSignupAction(this.props.userState.username, this.props.userState.password);
  }

  render() {
    const signupFunctions = {
      updateUsername: this.updateUsername,
      updatePassword: this.updatePassword,
      submitSignupForm: this.submitSignupForm,
    };

    return (
      <div>
        <Signup signupFunctions={signupFunctions} />
      </div>
    );
  }
} 

function mapStateToProps(state) {
  return {
    userState: state.userState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signupActions: bindActionCreators(signupActions, dispatch),
  };
}

SignupContainer.propTypes = {
  signupActions: PropTypes.object,
  userState: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
