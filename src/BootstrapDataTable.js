import React from "react";
import classnames from "classnames";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import PaginationComponent from './PaginationComponent';

const SORT_ASCENDING = 1;
const SORT_DESCENDING = -1;

class BootstrapDataTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sortColumn: null,
            sortOrder: 0,
            pages: [],
            currentPage: 0
        };
    }

    componentWillMount() {
        this.initTable(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.initTable(nextProps);
    }

    initTable(props) {
        const columns = React.Children.map(props.children, column => column.props);
        const columnsWithTotals = columns
            .filter(column => column.showTotal)
            .map(column => column.property);

        const data = props.data.slice();
        let totals = [];

        if (columnsWithTotals.length) {
            totals = this.computeTotals(data, columnsWithTotals);
        }

        const pages = props.pagination ? this.splitToPages(data, props.pageSize) : [];

        this.setState({columns, totals, data, pages});
    }

    splitToPages(data, pageSize) {
        const pages = [];
        let i = 0;
        let page = data.slice(i, i + pageSize);
        while (page.length) {
            pages.push(page);
            i += pageSize;
            page = data.slice(i, i + pageSize);
        }

        return pages;
    }

    computeTotals(data, properties) {
        return data
            .map(row => properties
                .map(property => ({[property]: row[property] || 0}))
                .reduce((a, b) => Object.assign({}, a, b), {}))
            .reduce((a, b) => properties
                .map(property => ({[property]: a[property] + b[property]}))
                .reduce((c, d) => Object.assign({}, c, d), {}));
    }

    render() {
        return (
            <div style={{width: '100%'}}>
                {this.wrapResponsive(this.getTable())}
                <PaginationComponent
                    currentPage={this.state.currentPage}
                    maxPages={this.props.maxPages}
                    pages={this.state.pages.length}
                    pagination={this.props.pagination}
                    changeToPage={this.changePage.bind(this)}/>
            </div>
        );
    }

    changePage(pageNumber) {
        this.setState({currentPage: pageNumber});
    }

    getTable() {
        const tableClassNames = classnames('table', {
            'table-striped': this.props.striped,
            'table-bordered': this.props.bordered,
            'table-hover': this.props.hover,
            'table-condensed': this.props.condensed
        });

        return (
            <table className={tableClassNames}>
                <TableHead
                    columns={this.state.columns}
                    sortBy={this.sortBy.bind(this)}
                    sortColumn={this.state.sortColumn}
                    sortOrder={this.state.sortOrder}/>
                <TableBody data={this.props.pagination ? this.state.pages[this.state.currentPage] : this.state.data}
                           columns={this.state.columns}
                           totals={this.state.totals}/>
            </table>
        );
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
                sortOrder: SORT_ASCENDING
            });
        }

        const sort = (a, b) => {
            if (a[column.property] > b[column.property]) {
                return SORT_ASCENDING * updatedState.sortOrder;
            }
            if (a[column.property] < b[column.property]) {
                return SORT_DESCENDING * updatedState.sortOrder;
            }
            return 0;
        };

        const data = this.state.data.slice().sort(sort);
        const pages = this.props.pagination ? this.splitToPages(data, this.props.pageSize) : [];

        this.setState(Object.assign(updatedState, { data, pages }));
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
    maxPages: React.PropTypes.number
};

BootstrapDataTable.defaultProps = {
    bordered: false,
    striped: false,
    responsive: false,
    hover: false,
    condensed: false,
    pagination: false,
    pageSize: 10,
    maxPages: 5
};

export default BootstrapDataTable;