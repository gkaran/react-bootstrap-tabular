import React from 'react';
import THead from './THead';
import TBody from './TBody';
import { SORT_ASCENDING, SORT_DESCENDING } from './utils/data-helpers';

class Table extends React.Component {

  render() {
    const tableClassNames = `table${
      this.props.striped ? ' table-striped' : ''
      }${this.props.bordered ? ' table-bordered' : ''
      }${this.props.hover ? ' table-hover' : ''
      }${this.props.condensed ? ' table-condensed' : ''}`;

    const table = (
      <table className={tableClassNames}>
        <THead
          columns={this.props.columns}
          sortBy={this.props.sortBy}
          sortColumn={this.props.sortColumn}
          sortOrder={this.props.sortOrder}
        />
        <TBody
          data={this.props.data}
          columns={this.props.columns}
          totalsRowClass={this.props.totalsRowClass}
          totals={this.props.reducedData}
        />
      </table>
    );

    if (this.props.responsive) {
      return (<div className="table-responsive">{table}</div>);
    }
    return table;
  }

}

Table.propTypes = {
  striped: React.PropTypes.bool,
  bordered: React.PropTypes.bool,
  hover: React.PropTypes.bool,
  condensed: React.PropTypes.bool,
  responsive: React.PropTypes.bool,
  columns: React.PropTypes.array.isRequired,
  sortColumn: React.PropTypes.object,
  sortOrder: React.PropTypes.oneOf([SORT_ASCENDING, SORT_DESCENDING]),
  data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  sortBy: React.PropTypes.func.isRequired,
  reducedData: React.PropTypes.object,
  totalsRowClass: React.PropTypes.string
};

export default Table;
