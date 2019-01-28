import React from 'react';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import PoetsListItem from 'src/components/PoetsListItem';
import styles from './PoetsTable.scss';

const PoetsTable = ({ authors, t }) => (
  <table className={styles.table}>
    <tbody>
      <tr>
        <th />
        <th>{t('name-of-poet')}</th>
        <th>{t('place-of-birth')}</th>
      </tr>
      {authors.map((id, index) => <PoetsListItem key={id} id={id} index={index} name={t(`name${id}`)} placeOfBirth={t(`placeOfBirth${id}`)} />)}
    </tbody>
  </table>
);

PoetsTable.propTypes = {
  t: PropTypes.func.isRequired,
  authors: PropTypes.PropTypes.arrayOf(PropTypes.string),
};

PoetsTable.defaultProps = {
  authors: {},
};

export default withNamespaces()(PoetsTable);
