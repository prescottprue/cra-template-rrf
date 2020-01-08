import React from 'react';
import PropTypes from 'prop-types';
import './toolbar.css';

function Toolbar({ title, children }) {
  return (
    <div className="toolbar-root">
      <div className="title-header">{title}</div>
      {children}
    </div>
  );
}

function Left({ icon, onClick }) {
  return (
    <div
      className="left-container"
      role="button"
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={0}
    >
      <img alt="Back Arrow" className="back-arrow" src={icon} />
    </div>
  );
}

function Right({ icon, onClick }) {
  return (
    <div
      role="button"
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={0}
      className="right-container"
    >
      <img src={icon} className="right-icon" alt="right button" />
    </div>
  );
}

Right.defaultProps = {
  onClick: () => {},
};

Right.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Left.defaultProps = {
  onClick: () => {},
};

Left.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Toolbar.defaultProps = {
  children: [],
};

Toolbar.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.elementType),
};

Toolbar.Left = Left;
Toolbar.Right = Right;
export default Toolbar;
