import React from 'react';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from './SortSelect.scss';

const SortSelect = ({ sortHeandler, t }) => (
  <p>
    {`${t('sort-by')} :`}
    <select onChange={({ target: { value } }) => sortHeandler(value)} className={styles.select}>
      <option value="id">{t('standart-sort')}</option>
      <option value="name">{t('name-sort')}</option>
      <option value="placeOfBirth">{t('place-of-birth-sort')}</option>
    </select>
  </p>
);

SortSelect.propTypes = {
  sortHeandler: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(SortSelect);
