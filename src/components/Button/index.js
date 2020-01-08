import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

function Button({ style, type, disabled, children, ...props }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className="custom-button"
      style={style}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  style: {},
  type: 'button',
  disabled: false,
};

Button.propTypes = {
  style: PropTypes.objectOf({}),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

export default Button;
