import React from 'react';
import PropTypes from 'prop-types';

const Works = ({ date, title, className }) => (
  <div className={className}>
    <p>{date}</p>
    <p>{title}</p>
  </div>
);

Works.propTypes = {
  date: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Works;
