import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import PaginationComponent from './PaginationComponent';
import SearchEntry from './SearchEntry';

const SORT_ASCENDING = 1;
const SORT_DESCENDING = -1;

class BootstrapDataTable extends React.Component {

  static sortData(data, column, sortOrder = SORT_ASCENDING) {
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

  static computeTotals(data, properties) {
    return data
    .map(row => properties
    .map(property => ({ [property]: row[property] || 0 }))
    .reduce((a, b) => Object.assign({}, a, b), {}))
    .reduce((a, b) => properties
    .map(property => ({ [property]: a[property] + b[property] }))
    .reduce((c, d) => Object.assign({}, c, d), {}));
  }

  static splitToPages(data, pageSize, pagination) {
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
    this.initTable(this.props.data, this.props.pageSize, this.props.pagination,
      this.props.children);
  }

  componentWillReceiveProps(nextProps) {
    this.initTable(nextProps.data, nextProps.pageSize, nextProps.pagination, nextProps.children);
  }

  onSearchTermChanged(e) {
    const searchTerm = e.target.value;
    const searchableColumns = this.getFilteredColumnProperties(column => column.includeInSearch);
    let data = this.state.initialData.slice().filter((row) => {
      for (const column of searchableColumns) {
        if (`${row[column] || ''}`.indexOf(searchTerm) >= 0) {
          return true;
        }
      }
      return false;
    });

    if (this.state.sortColumn) {
      data = BootstrapDataTable.sortData(data, this.state.sortColumn, this.state.sortOrder);
    }

    const pages = BootstrapDataTable.splitToPages(data, this.props.pageSize, this.props.pagination);

    this.setState({ searchTerm, data, pages, currentPage: 0 });
  }

  getTable() {
    const tableClassNames = `table${
      this.props.striped ? ' table-striped' : ''
      }${this.props.bordered ? ' table-bordered' : ''
      }${this.props.hover ? ' table-hover' : ''
      }${this.props.condensed ? ' table-condensed' : ''}`;

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

  getFilteredColumnProperties(filterPredicate = () => true, children = this.props.children) {
    const columns = React.Children.map(children, column => column.props);
    return columns.filter(filterPredicate).map(column => column.property);
  }

  changePage(pageNumber) {
    this.setState({ currentPage: pageNumber });
  }

  initTable(data, pageSize, pagination, children) {
    const columns = React.Children.map(children, column => column.props);
    const columnsWithTotals = this.getFilteredColumnProperties(
      column => column.showTotal, children);

    const dataCopy = data.slice();
    let totals = [];

    if (columnsWithTotals.length) {
      totals = BootstrapDataTable.computeTotals(dataCopy, columnsWithTotals);
    }

    const pages = BootstrapDataTable.splitToPages(dataCopy, pageSize, pagination);

    this.setState({ columns, totals, data: dataCopy, pages, initialData: dataCopy });
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

    const data = BootstrapDataTable.sortData(this.state.data, column, updatedState.sortOrder);
    const pages = BootstrapDataTable.splitToPages(data, this.props.pageSize, this.props.pagination);

    this.setState(Object.assign(updatedState, { data, pages }));
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <SearchEntry
          visible={this.props.searchable}
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
  children: React.PropTypes.node,
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
