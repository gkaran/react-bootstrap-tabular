import React from 'react';
import Td from './Td';

const TableRow = ({ columns, row, totals }) => (
  <tr>
    {
      columns.map((c, i) => <Td
        key={`${i}-${row[c.property]}` || `${i}-empty-${c.property}`}
        cell={row[c.property]}
        row={row}
        alignment={c.align}
        format={totals ? c.formatTotal || c.format : c.format}
      />)
    }
  </tr>
);

TableRow.propTypes = {
  columns: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  row: React.PropTypes.object.isRequired,
  totals: React.PropTypes.bool
};

export default TableRow;
