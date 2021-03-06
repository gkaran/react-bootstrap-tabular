import React from 'react';
import TableRow from './TableRow';

class TBody extends React.Component {

  render() {
    const { totals, columns } = this.props;
    return (
      <tbody>
        {this.props.data.map((entry, i) => (<TableRow
          columns={this.props.columns}
          row={entry}
          key={i}
        />))}
        {Object.keys(totals).length ? <TableRow
          rowClass={this.props.totalsRowClass}
          key={-1}
          row={totals}
          columns={columns} totals
        /> : null}
      </tbody>
    );
  }
}

TBody.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  columns: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  totals: React.PropTypes.object,
  totalsRowClass: React.PropTypes.string
};

TBody.defaultProps = {
  totals: {}
};

export default TBody;
