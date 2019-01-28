import React from 'react';
import PropTypes from 'prop-types';

const TimelineDate = ({ dataText, className }) => (
  <div className={className}>{dataText}</div>
);

TimelineDate.propTypes = {
  dataText: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export default TimelineDate;
