import React from 'react';
import Button from '../Button';

function GoogleButton(props) {
  return (
    <Button
      type="button"
      style={{ backgroundColor: 'green', color: 'white' }}
      {...props}
    >
      Sign in with Google
    </Button>
  );
}

export default GoogleButton;
