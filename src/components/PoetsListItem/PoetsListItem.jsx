import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PoetsListItem = ({
  id,
  index,
  name,
  placeOfBirth,
}) => (
  <tr>
    <td><Link to={`/Poets/${id}`}>{index + 1}</Link></td>
    <td><Link to={`/Poets/${id}`}>{name}</Link></td>
    <td><Link to={`/Poets/${id}`}>{placeOfBirth}</Link></td>
  </tr>
);

PoetsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  placeOfBirth: PropTypes.string.isRequired,
};

export default PoetsListItem;
