import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Signup from './../../components/Signup/Signup.js';
import * as signupActions from './../../actions/signupActions.js';

class SignupContainer extends Component {
  render() {
    return (
      <div>Signup container</div>
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
