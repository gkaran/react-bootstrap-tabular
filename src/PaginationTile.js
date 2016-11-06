import React from 'react';

class PaginationTile extends React.Component {

  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);
  }

  changePage(e) {
    e.preventDefault();
    this.props.changePage(this.props.page);
  }

  render() {
    return (
      <li className={this.props.active ? 'active' : ''}>
        <a href={undefined} onClick={this.changePage}>{this.props.page}</a>
      </li>
    );
  }
}

PaginationTile.propTypes = {
  active: React.PropTypes.bool,
  page: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]).isRequired,
  changePage: React.PropTypes.func.isRequired
};

export default PaginationTile;
