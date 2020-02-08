/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import { validateEmail } from '../../../../utils/form';
import Button from '../../../../components/Button';
import './loginForm.css';

function LoginForm({ onSubmit }) {
  function handleSubmit(values, { setSubmitting }) {
    onSubmit(values).then(() => {
      setSubmitting(false);
    });
  }

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      {({ touched, isSubmitting }) => (
        <Form className="root-form">
          <label className="label-class" htmlFor="email">
            Email
            <Field
              type="email"
              name="email"
              validate={validateEmail}
              className="input-field"
              margin="normal"
            />
          </label>
          <label className="label-class" htmlFor="password">
            Password
            <Field
              type="password"
              name="password"
              className="input-field"
              margin="normal"
            />
          </label>
          <div>
            <Button
              color="primary"
              type="submit"
              variant="contained"
              style={{ paddingLeft: 16, paddingRight: 16, marginTop: 16 }}
              disabled={Object.keys(touched).length === 0 || isSubmitting}
            >
              {isSubmitting ? 'Loading' : 'Login'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
