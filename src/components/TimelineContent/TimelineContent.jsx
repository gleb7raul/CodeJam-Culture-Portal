import React from 'react';
import PropTypes from 'prop-types';

const TimelineContent = ({ description, className }) => (
  <div className={className}>{description}</div>
);

TimelineContent.propTypes = {
  description: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default TimelineContent;
