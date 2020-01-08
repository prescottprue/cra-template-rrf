import React from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';
import Paper from '../../../../components/Card';
import { SIGNUP_PATH } from '../../../../constants/paths';
import LoginForm from '../LoginForm';
import GoogleButton from '../../../../components/GoogleButton';
import './login.css';

function LoginPage() {
  const firebase = useFirebase();

  function onSubmitFail(_, __, err) {
    console.log('error is =>', err);
  }

  function googleLogin() {
    return firebase.login({ provider: 'google', type: 'popup' }).catch(err => {
      console.log(err.message);
    });
  }

  function emailLogin(creds) {
    return firebase.login(creds).catch(err => {
      console.log(err.message);
    });
  }

  return (
    <div className="root">
      <Paper>
        <LoginForm onSubmit={emailLogin} onSubmitFail={onSubmitFail} />
      </Paper>
      <div>or</div>
      <div>
        <GoogleButton onClick={googleLogin} data-test="google-auth-button" />
      </div>
      <div>
        <span>Need an account?</span>
        <Link className="link-class" to={SIGNUP_PATH}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
