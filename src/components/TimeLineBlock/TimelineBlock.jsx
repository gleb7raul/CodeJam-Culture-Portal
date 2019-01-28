import React from 'react';
import PropTypes from 'prop-types';

const TimelineBlock = ({
  children,
  className,
}) => (
  <div className={className}>{children}</div>
);

TimelineBlock.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default TimelineBlock;
