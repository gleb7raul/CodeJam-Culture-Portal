import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './AuthorDay.scss';

const id = 3;

const Authorday = ({ t }) => (
  <div className={styles.wrapper}>
    <h2>{t('authorOfTheDay')}</h2>
    <Link to={`/Poets/${id}`}>{t(`name${id}`)}</Link>
  </div>
);

Authorday.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(Authorday);
