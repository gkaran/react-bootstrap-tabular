import React from 'react';

class Td extends React.Component {

  render() {
    return (
      <td style={{ textAlign: this.props.alignment }}>
        {this.props.format ? this.props.format(this.props.cell, this.props.row) : this.props.cell}
      </td>
    );
  }

}

Td.propTypes = {
  cell: React.PropTypes.any(),
  row: React.PropTypes.object.isRequired,
  format: React.PropTypes.func,
  alignment: React.PropTypes.oneOf(['left', 'center', 'right']),
};

export default Td;
