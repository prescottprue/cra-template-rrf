import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

function Card({ children }) {
  return <div className="card">{children}</div>;
}

Card.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Card;
