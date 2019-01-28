import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ video, className, id }) => (
  <iframe
    className={className}
    title={id}
    width="560"
    height="315"
    src={video}
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen="allowfullscreen"
  />
);

Video.propTypes = {
  video: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Video;
