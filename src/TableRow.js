import React from 'react';
import TableCell from './TableCell';

const columnToCell = (column, { row, totals }) => <TableCell
  cell={row[column.property]}
  row={row}
  alignment={column.align}
  format={totals ? column.formatTotal || column.format : column.format}
/>;

const TableRow = (props) => (
  <tr>{props.columns.map(c => columnToCell(c, props))}</tr>
);

TableRow.propTypes = {
  columns: React.PropTypes.object.isRequired,
  row: React.PropTypes.array.isRequired,
  totals: React.PropTypes.bool,
};

TableRow.defaultProps = {
  totals: false,
};

export default TableRow;
