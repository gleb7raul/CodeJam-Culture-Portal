import React from 'react';
import { withNamespaces } from 'react-i18next';
import styles from './HomePage.scss';
import AboutTeam from '../../components/AboutTeam';
import AuthorDay from '../../components/AuthorDay';


const Homepage = ({
  t,
}) => (
  <div className={styles.wrapper}>
    <h2>{t('portalTitle')}</h2>
    <p className={styles.portalDescription}>
      {t('portalDescription')}
    </p>
    <AuthorDay />
    <AboutTeam />
  </div>
);

export default withNamespaces()(Homepage);
