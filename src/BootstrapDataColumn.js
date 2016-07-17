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
    showTotal: React.PropTypes.bool,
    sortable: React.PropTypes.bool
};

BootstrapDataColumn.defaultProps = {
    format: (cell, row) => cell,
    showTotal: false,
    sortable: false
};

export default BootstrapDataColumn;