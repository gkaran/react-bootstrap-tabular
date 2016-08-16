import React from 'react';
import classnames from 'classnames';
import TableHead from './TableHead';
import TableBody from './TableBody';
import PaginationComponent from './PaginationComponent';
import SearchEntry from './SearchEntry';

const SORT_ASCENDING = 1;
const SORT_DESCENDING = -1;

class BootstrapDataTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sortColumn: null,
      sortOrder: 0,
      pages: [],
      currentPage: 0,
      searchTerm: '',
    };
  }

  componentWillMount() {
    this.initTable(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.initTable(nextProps);
  }

  onSearchTermChanged(e) {
    const searchTerm = e.target.value;
    const searchableColumns = this.getFilteredColumnProperties(column => column.includeInSearch);
    let data = this.state.initialData.slice().filter(row => {
      for (const column of searchableColumns) {
        if (row[column].indexOf(searchTerm) >= 0) {
          return true;
        }
      }
      return false;
    });

    if (this.state.sortColumn) {
      data = this.sortData(data, this.state.sortColumn, this.state.sortOrder);
    }

    const pages = this.splitToPages(data, this.props);

    this.setState({ searchTerm, data, pages, currentPage: 0 });
  }

  getTable() {
    const tableClassNames = classnames('table', {
      'table-striped': this.props.striped,
      'table-bordered': this.props.bordered,
      'table-hover': this.props.hover,
      'table-condensed': this.props.condensed,
    });

    const bodyData = this.props.pagination ?
      this.state.pages[this.state.currentPage] || [] :
      this.state.data;

    return (
      <table className={tableClassNames}>
        <TableHead
          columns={this.state.columns}
          sortBy={this.sortBy.bind(this)}
          sortColumn={this.state.sortColumn}
          sortOrder={this.state.sortOrder}
        />
        <TableBody
          data={bodyData}
          columns={this.state.columns}
          totals={this.state.totals}
        />
      </table>
    );
  }

  getFilteredColumnProperties(filterPredicate = () => true, props = this.props) {
    const columns = React.Children.map(props.children, column => column.props);
    return columns.filter(filterPredicate).map(column => column.property);
  }

  computeTotals(data, properties) {
    return data
      .map(row => properties
        .map(property => ({ [property]: row[property] || 0 }))
        .reduce((a, b) => Object.assign({}, a, b), {}))
      .reduce((a, b) => properties
        .map(property => ({ [property]: a[property] + b[property] }))
        .reduce((c, d) => Object.assign({}, c, d), {}));
  }

  splitToPages(data, { pageSize, pagination }) {
    const pages = [];
    if (pagination) {
      let i = 0;
      let page = data.slice(i, i + pageSize);
      while (page.length) {
        pages.push(page);
        i += pageSize;
        page = data.slice(i, i + pageSize);
      }
    }

    return pages;
  }

  changePage(pageNumber) {
    this.setState({ currentPage: pageNumber });
  }

  initTable(props) {
    const columns = React.Children.map(props.children, column => column.props);
    const columnsWithTotals = this.getFilteredColumnProperties(column => column.showTotal, props);

    const data = props.data.slice();
    let totals = [];

    if (columnsWithTotals.length) {
      totals = this.computeTotals(data, columnsWithTotals);
    }

    const pages = this.splitToPages(data, props);

    this.setState({ columns, totals, data, pages, initialData: data });
  }

  wrapResponsive(table) {
    if (this.props.responsive) {
      return <div className="table-responsive">{table}</div>;
    }
    return table;
  }

  sortBy(column) {
    const updatedState = {};

    if (this.state.sortColumn === column) {
      updatedState.sortOrder = this.state.sortOrder * -1;
    } else {
      Object.assign(updatedState, {
        sortColumn: column,
        sortOrder: SORT_ASCENDING,
      });
    }

    const data = this.sortData(this.state.data, column, updatedState.sortOrder);
    const pages = this.splitToPages(data, this.props);

    this.setState(Object.assign(updatedState, { data, pages }));
  }

  sortData(data, column, sortOrder = SORT_ASCENDING) {
    const sort = (a, b) => {
      if (a[column.property] > b[column.property]) {
        return SORT_ASCENDING * sortOrder;
      }
      if (a[column.property] < b[column.property]) {
        return SORT_DESCENDING * sortOrder;
      }
      return 0;
    };

    return data.slice().sort(sort);
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <SearchEntry visible={this.props.searchable}
          onSearchTermChanged={this.onSearchTermChanged.bind(this)}
          searchTerm={this.state.searchTerm}
        />
        {this.wrapResponsive(this.getTable())}
        <PaginationComponent
          currentPage={this.state.currentPage}
          maxPages={this.props.maxPages}
          pages={this.state.pages.length}
          pagination={this.props.pagination}
          changeToPage={this.changePage.bind(this)}
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
};

BootstrapDataTable.defaultProps = {
  bordered: false,
  striped: false,
  responsive: false,
  hover: false,
  condensed: false,
  pagination: false,
  pageSize: 10,
  maxPages: 5,
  searchable: false,
};

export default BootstrapDataTable;
