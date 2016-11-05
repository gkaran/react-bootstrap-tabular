import React from 'react';
import { SORT_ASCENDING, SORT_DESCENDING } from './utils/data-helpers';

class SortIndicator extends React.Component {

  render() {
    let indicator = null;
    if (this.props.column.sortable) {
      indicator = this.props.sortableIndicator;
      if (this.props.sortColumn && this.props.sortColumn.uid === this.props.column.uid) {
        if (this.props.sortOrder === SORT_ASCENDING) {
          indicator = this.props.ascendingIndicator;
        } else if (this.props.sortOrder === SORT_DESCENDING) {
          indicator = this.props.descendingIndicator;
        }
      }
    }

    if (indicator) {
      return <span style={{ marginLeft: '5px' }}>{indicator}</span>;
    }
    return null;
  }
}

SortIndicator.propTypes = {
  column: React.PropTypes.object,
  sortColumn: React.PropTypes.object,
  sortOrder: React.PropTypes.oneOf([SORT_ASCENDING, SORT_DESCENDING]),
  ascendingIndicator: React.PropTypes.node,
  descendingIndicator: React.PropTypes.node,
  sortableIndicator: React.PropTypes.node
};

SortIndicator.defaultProps = {
  ascendingIndicator: '▼',
  descendingIndicator: '▲',
  sortableIndicator: '▲/▼'
};

export default SortIndicator;
