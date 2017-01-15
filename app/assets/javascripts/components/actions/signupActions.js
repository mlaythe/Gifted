import * as types from './actionTypes.js';

export function usernameInputAction(input) {
  return {
    type: types.USERNAME_INPUT,
    usernameInput: input,
  };
}

export function passwordInputAction(input) {
  return {
    type: types.PASSWORD_INPUT,
    passwordInput: input,
  };
}

export function emptySignupField() {
  return {
    type: types.EMPTY_SIGNUP_FIELD,
  };
}

export function submitSignupForm() {
  return {
    type: types.SUBMIT_SIGNUP_FORM,
  };
}