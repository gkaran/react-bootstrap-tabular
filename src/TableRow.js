import React from 'react';
import TableCell from './TableCell';

const TableRow = (props) => (
    <tr>{props.columns.map(c => columnToCell(c, props))}</tr>
);

const columnToCell = (column, props) => <TableCell
    cell={props.row[column.property]}
    row={props.row}
    format={column.format}/>;

TableRow.propTypes = {
    columns: React.PropTypes.object.isRequired,
    row: React.PropTypes.array.isRequired
};

export default TableRow;