import React from 'react';

class TableHead extends React.Component {

  getColumns() {
    return this.props.columns.map(this.toCell.bind(this));
  }

  toCell(column) {
    let content = [column.name];

    if (column.sortable) {
      let sortIcon = 'glyphicon-sort';
      if (this.props.sortColumn && this.props.sortColumn === column) {
        sortIcon = 'glyphicon-sort-by-attributes';
        if (this.props.sortOrder < 0) {
          sortIcon += '-alt';
        }
      }
      content.push(
        <span style={{ marginLeft: 2 }} className={`glyphicon ${sortIcon}`} aria-hidden="true" />
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
