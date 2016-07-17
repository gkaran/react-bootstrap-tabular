import React from "react";
import classnames from "classnames";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const SORT_ASCENDING = 1;
const SORT_DESCENDING = -1;

class BootstrapDataTable extends React.Component {

    getInitialState() {
        return {
            sortColumn: null,
            sortOrder: 0
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

        this.setState({columns, data, totals});
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
        return this.wrapResponsive(this.getTable());
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
                <TableBody data={this.state.data} columns={this.state.columns} totals={this.state.totals}/>
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

        this.setState(Object.assign(updatedState, {
            data: this.state.data.slice().sort(sort)
        }));
    }

}

BootstrapDataTable.propTypes = {
    bordered: React.PropTypes.bool,
    striped: React.PropTypes.bool,
    responsive: React.PropTypes.bool,
    hover: React.PropTypes.bool,
    condensed: React.PropTypes.bool,
    data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default BootstrapDataTable;