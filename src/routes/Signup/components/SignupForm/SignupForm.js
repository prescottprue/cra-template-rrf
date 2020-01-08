/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import { validateEmail } from '../../../../utils/form';
import Button from '../../../../components/Button';

function SignupForm({ onSubmit }) {
  function handleSubmit(values, { setSubmitting }) {
    onSubmit(values).then(() => {
      setSubmitting(false);
    });
  }

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      {({ touched, isSubmitting }) => (
        <Form className="root-form">
          <label className="label-class" htmlFor="username">
            Username
            <Field
              type="username"
              name="username"
              className="input-field"
              margin="normal"
              fullWidth
            />
          </label>
          <label className="label-class" htmlFor="email">
            Email
            <Field
              type="email"
              name="email"
              validate={validateEmail}
              className="input-field"
              margin="normal"
              fullWidth
            />
          </label>
          <label className="label-class" htmlFor="username">
            Password
            <Field
              type="password"
              name="password"
              className="input-field"
              margin="normal"
              fullWidth
            />
          </label>
          <div>
            <Button
              color="primary"
              type="submit"
              variant="contained"
              disabled={Object.keys(touched).length === 0 || isSubmitting}
            >
              {isSubmitting ? 'Loading' : 'Signup'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
