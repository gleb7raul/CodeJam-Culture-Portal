import React from 'react';
import { withNamespaces } from 'react-i18next';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';
import styles from './SearchInput.scss';

const SearchInput = ({ searchHeandler, t }) => (
  <DebounceInput
    type="text"
    onChange={e => searchHeandler(e.target.value)}
    placeholder={t('search-placeholder')}
    minLength={3}
    debounceTimeout={300}
    className={styles.input}
  />
);

SearchInput.propTypes = {
  searchHeandler: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};


export default withNamespaces()(SearchInput);
