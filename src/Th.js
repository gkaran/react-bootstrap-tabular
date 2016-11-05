import React from 'react';
import SortIndicator from './SortIndicator';
import { SORT_ASCENDING, SORT_DESCENDING } from './utils/data-helpers';

class Th extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.props.column.sortable) {
      this.props.sortBy(this.props.column);
    }
  }

  render() {
    return (
      <th onClick={this.handleClick} style={{ cursor: 'pointer' }}>
        {this.props.column.name}
        <SortIndicator
          column={this.props.column}
          sortOrder={this.props.sortOrder}
          sortColumn={this.props.sortColumn}
        />
      </th>
    );
  }

}

Th.propTypes = {
  column: React.PropTypes.object,
  sortColumn: React.PropTypes.object,
  sortOrder: React.PropTypes.oneOf([SORT_ASCENDING, SORT_DESCENDING]),
  sortBy: React.PropTypes.func.isRequired
};

export default Th;
