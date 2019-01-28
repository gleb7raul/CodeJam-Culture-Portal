import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import styles from './HeaderBar.scss';


const HeaderBar = ({ t, i18n }) => (
  <div className={styles.wrapper}>
    <h1>{t('Belаrusian poets')}</h1>
    <nav>
      <NavLink exact to="/" className={styles.navLink} activeClassName={styles.active}>{t('Main')}</NavLink>
      <span>|</span>
      <NavLink exact to="/Poets" className={styles.navLink} activeClassName={styles.active}>{t('Poets list')}</NavLink>
    </nav>
    <select onChange={({ target: { value } }) => i18n.changeLanguage(value)}>
      <option value="en">English</option>
      <option value="ru">Русский</option>
      <option value="by">Беларускі</option>
    </select>
  </div>
);

HeaderBar.propTypes = {
  i18n: PropTypes.shape({
    changeLanguage: PropTypes.func,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(HeaderBar);
