import React from 'react';
import TableCell from './TableCell';

const TableRow = (props) => (
    <tr>{props.columns.map(c => columnToCell(c, props))}</tr>
);

const columnToCell = (column, props) => <TableCell
    cell={props.row[column.property]}
    row={props.row}
    format={props.totals ? column.formatTotal || column.format : column.format}/>;

TableRow.propTypes = {
    columns: React.PropTypes.object.isRequired,
    row: React.PropTypes.array.isRequired,
    totals: React.PropTypes.bool
};

TableRow.defaultProps = {
    totals: false
};

export default TableRow;