import React from 'react';
import { calcPaginationTiles } from './utils/pagination';
import PaginationTile from './PaginationTile';

class PaginationComponent extends React.Component {

  constructor(props) {
    super(props);

    this.changeToPreviousPage = this.changeToPreviousPage.bind(this);
    this.changeToFirstPage = this.changeToFirstPage.bind(this);
    this.changeToNextPage = this.changeToNextPage.bind(this);
    this.changeToLastPage = this.changeToLastPage.bind(this);
  }

  changeToPreviousPage() {
    this.props.changeToPage(this.props.currentPage - 1);
  }

  changeToFirstPage() {
    this.props.changeToPage(1);
  }

  changeToNextPage() {
    this.props.changeToPage(this.props.currentPage + 1);
  }

  changeToLastPage() {
    this.props.changeToPage(this.props.pages);
  }

  render() {
    if (!this.props.pagination || this.props.pages <= 1) {
      return null;
    }

    const tileComponents = [];
    if (this.props.currentPage > 1) {
      tileComponents.push(<PaginationTile
        key={this.props.firstPageIndicator}
        page={this.props.firstPageIndicator}
        changePage={this.changeToFirstPage}
      />);
      tileComponents.push(<PaginationTile
        key={this.props.previousPageIndicator}
        page={this.props.previousPageIndicator}
        changePage={this.changeToPreviousPage}
      />);
    }

    const tiles = calcPaginationTiles(this.props.currentPage, this.props.maxPages, this.props.pages);
    tileComponents.push(...tiles.map(t => <PaginationTile
      page={t}
      key={t}
      changePage={this.props.changeToPage}
      active={t === this.props.currentPage}
    />));

    if (this.props.currentPage < this.props.pages) {
      tileComponents.push(<PaginationTile
        key={this.props.nextPageIndicator}
        page={this.props.nextPageIndicator}
        changePage={this.changeToNextPage}
      />);
      tileComponents.push(<PaginationTile
        key={this.props.lastPageIndicator}
        page={this.props.lastPageIndicator}
        changePage={this.changeToLastPage}
      />);
    }

    return (
      <div style={{ textAlign: this.props.align }}>
        <ul className="pagination">{tileComponents}</ul>
      </div>
    );
  }

}

PaginationComponent.propTypes = {
  pagination: React.PropTypes.bool.isRequired,
  pages: React.PropTypes.number.isRequired,
  currentPage: React.PropTypes.number.isRequired,
  maxPages: React.PropTypes.number.isRequired,
  changeToPage: React.PropTypes.func.isRequired,
  align: React.PropTypes.oneOf(['left', 'center', 'right']),
  firstPageIndicator: React.PropTypes.oneOfType([React.PropTypes.node, React.PropTypes.string]),
  lastPageIndicator: React.PropTypes.oneOfType([React.PropTypes.node, React.PropTypes.string]),
  previousPageIndicator: React.PropTypes.oneOfType([React.PropTypes.node, React.PropTypes.string]),
  nextPageIndicator: React.PropTypes.oneOfType([React.PropTypes.node, React.PropTypes.string])
};

PaginationComponent.defaultProps = {
  align: 'right',
  firstPageIndicator: '⏪',
  lastPageIndicator: '⏩',
  previousPageIndicator: '◂',
  nextPageIndicator: '▸'
};

export default PaginationComponent;
