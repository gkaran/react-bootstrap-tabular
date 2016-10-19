import React from 'react';

class BootstrapDataColumn extends React.Component {
  render() {
    return null;
  }
}

BootstrapDataColumn.propTypes = {
  property: React.PropTypes.string.isRequired,
  name: React.PropTypes.string,
  format: React.PropTypes.func,
  formatTotal: React.PropTypes.func,
  showTotal: React.PropTypes.bool,
  sortable: React.PropTypes.bool,
  includeInSearch: React.PropTypes.bool,
  align: React.PropTypes.oneOf(['left', 'center', 'right']),
};

BootstrapDataColumn.defaultProps = {
  showTotal: false,
  sortable: false,
  includeInSearch: false,
  align: 'left',
};

export default BootstrapDataColumn;
