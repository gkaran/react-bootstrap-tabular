import React from 'react';

class TableHead extends React.Component {

  getColumns() {
    return this.props.columns.map(this.toCell.bind(this));
  }

  toCell(column) {
    const content = [column.name];

    if (column.sortable) {
      let sortIcon = '▲/▼';
      if (this.props.sortColumn && this.props.sortColumn === column) {
        sortIcon = '▼';
        if (this.props.sortOrder < 0) {
          sortIcon += '▲';
        }
      }
      content.push(
        <span style={{ marginLeft: 2 }}>{sortIcon}</span>
      );
    }
    return <th onClick={e => this.handleOnClick(e, column)}>{content}</th>;
  }

  handleOnClick(event, column) {
    event.preventDefault();

    if (column.sortable) {
      this.props.sortBy(column);
    }
  }

  render() {
    return (
      <thead>
        <tr>{this.getColumns()}</tr>
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
