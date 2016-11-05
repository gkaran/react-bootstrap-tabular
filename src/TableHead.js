import React from 'react';
import Th from './Th';

class TableHead extends React.Component {

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <Th
              column={column}
              key={column.uid}
              sortColumn={this.props.sortColumn}
              sortOrder={this.props.sortOrder}
              sortBy={this.props.sortBy}
            />
          ))}
        </tr>
      </thead>
    );
  }

}

TableHead.propTypes = {
  columns: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  sortColumn: React.PropTypes.object,
  sortOrder: React.PropTypes.number,
  sortBy: React.PropTypes.func.isRequired,
};

export default TableHead;
