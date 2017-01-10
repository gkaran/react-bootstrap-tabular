import React from 'react';
import update from 'react-addons-update';
import Table from './Table';
import PaginationComponent from './PaginationComponent';
import SearchEntry from './SearchEntry';
import { sum } from './utils/reducers';
import { sort, splitToPages, SORT_ASCENDING } from './utils/data-helpers';
import guid from './utils/guid';

class BootstrapDataTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      initialData: [],
      data: [],
      columns: [],
      reducedData: {},
      sorting: {
        columns: null,
        order: SORT_ASCENDING
      },
      pagination: {
        pages: [],
        activePage: 1
      },
      searching: {
        term: ''
      }
    };

    this.sortBy = this.sortBy.bind(this);
    this.initTable = this.initTable.bind(this);
    this.changePage = this.changePage.bind(this);
    this.onSearchTermChanged = this.onSearchTermChanged.bind(this);
  }

  componentWillMount() {
    this.initTable(this.props.data, this.props.pageSize, this.props.pagination, this.props.children);
  }

  componentWillReceiveProps(nextProps) {
    this.initTable(nextProps.data, nextProps.pageSize, nextProps.pagination, nextProps.children);
  }

  onSearchTermChanged(e) {
    const searchTerm = e.target.value;
    const searchableColumns = this.state.columns.filter(c => c.includeInSearch).map(c => c.property);

    let data = this.state.initialData.slice().filter((row) => {
      for (const column of searchableColumns) {
        if (`${row[column] || ''}`.indexOf(searchTerm) >= 0) {
          return true;
        }
      }
      return false;
    });

    if (this.state.sorting.column) {
      data = sort(data, this.state.sorting.column, this.state.sorting.order);
    }
    const pages = this.props.pagination ? splitToPages(data, this.props.pageSize) : [];

    this.setState(update(this.state, {
      data: { $set: data },
      searching: {
        term: { $set: searchTerm }
      },
      pagination: {
        pages: { $set: pages },
        activePage: { $set: 1 }
      }
    }));
  }

  changePage(pageNumber) {
    this.setState(update(this.state, { pagination: { activePage: { $set: pageNumber } } }));
  }

  initTable(data, pageSize, pagination, children) {
    const columns = React.Children.map(children, column => Object.assign({ uid: guid() }, column.props));
    const reducingColumns = columns.filter(c => c.showTotal).map(c => c.property);
    const dataCopy = data.slice();
    const reducedData = sum(dataCopy, reducingColumns);
    const pages = pagination ? splitToPages(dataCopy, pageSize) : [];

    this.setState(update(this.state, {
      columns: { $set: columns },
      data: { $set: dataCopy },
      initialData: { $set: data },
      reducedData: { $set: reducedData },
      pagination: { pages: { $set: pages } }
    }));
  }

  sortBy(column) {
    const sortingOrder = this.state.sorting.column === column
      ? this.state.sorting.order * -1
      : SORT_ASCENDING;
    const data = sort(this.state.data, column, sortingOrder);
    const pages = this.props.pagination ? splitToPages(data, this.props.pageSize) : [];

    this.setState(update(this.state, {
      data: { $set: data },
      sorting: {
        column: { $set: column },
        order: { $set: sortingOrder }
      },
      pagination: {
        pages: { $set: pages }
      }
    }));
  }

  render() {
    const tableDisplayData = this.props.pagination
      ? this.state.pagination.pages[this.state.pagination.activePage - 1] || []
      : this.state.data;

    return (
      <div style={{ width: '100%' }}>
        <SearchEntry
          visible={this.props.searchable}
          onSearchTermChanged={this.onSearchTermChanged}
          searchTerm={this.state.searching.term}
        />

        <Table
          data={tableDisplayData}
          columns={this.state.columns}
          sortBy={this.sortBy}
          bordered={this.props.bordered}
          condensed={this.props.condensed}
          hover={this.props.hover}
          responsive={this.props.responsive}
          striped={this.props.striped}
          sortColumn={this.state.sorting.column}
          sortOrder={this.state.sorting.order}
          reducedData={this.state.reducedData}
        />

        <PaginationComponent
          currentPage={this.state.pagination.activePage}
          maxPages={this.props.maxPages}
          pages={this.state.pagination.pages.length}
          pagination={this.props.pagination}
          changeToPage={this.changePage}
        />
      </div>
    );
  }

}

BootstrapDataTable.propTypes = {
  bordered: React.PropTypes.bool,
  striped: React.PropTypes.bool,
  responsive: React.PropTypes.bool,
  hover: React.PropTypes.bool,
  condensed: React.PropTypes.bool,
  data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  pagination: React.PropTypes.bool,
  pageSize: React.PropTypes.number,
  maxPages: React.PropTypes.number,
  searchable: React.PropTypes.bool,
  children: React.PropTypes.node
};

BootstrapDataTable.defaultProps = {
  pageSize: 10,
  maxPages: 5,
  pagination: false,
  searchable: false
};

export default BootstrapDataTable;
