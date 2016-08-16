import React from "react";
import TableRow from "./TableRow";

class TableBody extends React.Component {

    render() {
        return (
            <tbody>
            {this.props.data.map(entry => <TableRow
                columns={this.props.columns}
                row={entry}/>)}
            <TableRow row={this.props.totals} columns={this.props.columns} totals={true}/>
            </tbody>
        );
    }
}

TableBody.propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    columns: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default TableBody;