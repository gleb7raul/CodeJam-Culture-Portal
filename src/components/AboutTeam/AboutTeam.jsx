import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import TeamMember from './TeamMember';
import styles from './AboutTeam.scss';

const teamMembers = [
  {
    imgSrc: 'AntonyKor.png',
    github: 'antonykor',
    name: 'Anton Kalodzich',
  },
  {
    imgSrc: 'gleb7raul.png',
    github: 'gleb7raul',
    name: 'Hleb Nebiadukhin',
  },
  {
    imgSrc: 'vvikota.jpg',
    github: 'vvikota',
    name: 'Viktar Rymsha',
  },
  {
    imgSrc: 'NoviceBlunderer.png',
    github: 'noviceblunderer',
    name: 'Kanstantsin Piatrou',
  },
];

const Aboutteam = ({ t }) => (
  <div className={styles.wrapper}>
    <h2>{t('devTeam')}</h2>
    <div className={styles.devTeam}>
      {teamMembers.map(item => (
        <TeamMember key={item.github} {...item} />
      ))}
    </div>
  </div>
);

Aboutteam.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(Aboutteam);
