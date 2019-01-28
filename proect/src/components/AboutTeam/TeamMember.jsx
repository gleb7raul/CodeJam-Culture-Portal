import React from 'react';
import styles from './AboutTeam.scss';

class TeamMember extends React.Component {
  state = {
    photo: null,
  };

  componentDidMount() {
    const { imgSrc } = this.props;
    this.isComponentMounted = true;
    import(`src/images/team/${imgSrc}`).then(img => this.isComponentMounted && this.setState({ photo: img.default }));
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  render() {
    const { photo } = this.state;
    const { github, name } = this.props;
    return (
      <div className={styles.devCard}>
        {photo && <img alt={name} src={photo} width="100%" />}
        <ul className={styles.devName}>
          <li>{github}</li>
          <li>{name}</li>
        </ul>
      </div>
    );
  }
}

export default TeamMember;
