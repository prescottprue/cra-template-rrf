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
  children: '',
};

Button.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.object),
    PropTypes.objectOf(PropTypes.string),
    PropTypes.objectOf(PropTypes.number),
  ]),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default Button;
