import React, { PropTypes } from 'react';
import FormInput from '../FormInput/FormInput';

const Signup = ({ signupFunctions }) => {
  const { updateUsername, updatePassword, submitSignupForm } = signupFunctions;

  return (
    <div>
      <form onSubmit={submitSignupForm}>
        <FormInput
          inputType='username'
          inputID='signupUsernameInput'
          labelText='Username'
          handleChangeFn={updateUsername}
        />
        <FormInput
          inputType='password'
          inputID='signupPasswordInput'
          labelText='Password'
          handleChangeFn={updatePassword}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

Signup.propTypes = {
  
};

export default Signup;
