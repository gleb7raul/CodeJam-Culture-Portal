import React from 'react';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import authors from 'src/data';
import SearchInput from 'src/components/SearchInput';
import PoetsTable from 'src/components/PoetsTable';
import SortSelect from 'src/components/SortSelect';

class PoetsList extends React.Component {
  state = {
    authorsNow: authors,
    sortBy: 'id',
  }

  searchHeandler(text) {
    const search = text.toLowerCase();
    const { t } = this.props;
    const { sortBy } = this.state;

    this.setState({
      sortBy,
      authorsNow: authors
        .filter(author => t(`placeOfBirth${author.id}`).toLowerCase().includes(search) || t(`name${author.id}`).toLowerCase().includes(search))
        .sort((a, b) => {
          if (sortBy === 'id') return a.id - b.id;
          return t(sortBy + a.id).localeCompare(t(sortBy + b.id));
        }),
    });
  }

  sortHeandler(sortBy) {
    const { authorsNow } = this.state;

    this.setState({
      sortBy,
      authorsNow,
    });
  }

  render() {
    const { authorsNow, sortBy } = this.state;
    const { t } = this.props;

    return (
      <div>
        <SearchInput searchHeandler={(...args) => this.searchHeandler(...args)} />
        <SortSelect sortHeandler={sort => this.sortHeandler(sort)} />
        <PoetsTable
          authors={authorsNow.sort((a, b) => {
            if (sortBy === 'id') return a.id - b.id;
            return t(sortBy + a.id).localeCompare(t(sortBy + b.id));
          }).map(author => author.id)}
        />
      </div>
    );
  }
}

PoetsList.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(PoetsList);
