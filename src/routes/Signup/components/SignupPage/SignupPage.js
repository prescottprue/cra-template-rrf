import React from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';
import { LOGIN_PATH } from '../../../../constants/paths';
import SignupForm from '../SignupForm';
import Paper from '../../../../components/Card';
import GoogleButton from '../../../../components/GoogleButton';

function SignupPage() {
  const firebase = useFirebase();

  function onSubmitFail(formErrs, dispatch, err) {
    console.log(err);
  }

  function showError(err) {
    console.log(err);
  }

  function googleLogin() {
    return firebase
      .login({ provider: 'google', type: 'popup' })
      .catch(err => showError(err.message));
  }

  function emailSignup(creds) {
    return firebase
      .createUser(creds, {
        email: creds.email,
        username: creds.username,
      })
      .catch(err => showError(err));
  }

  return (
    <div className="root">
      <Paper>
        <SignupForm onSubmit={emailSignup} onSubmitFail={onSubmitFail} />
      </Paper>
      <div>or</div>
      <div>
        <GoogleButton onClick={googleLogin} data-test="google-auth-button" />
      </div>
      <div>
        <span>Already have an account?</span>
        <Link className="link-class" to={LOGIN_PATH}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default SignupPage;
