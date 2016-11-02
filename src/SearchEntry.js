import React from 'react';

class SearchEntry extends React.Component {

  render() {
    if (!this.props.visible) {
      return null;
    }

    return (
      <div className="input-group" style={{ width: '250px', 'margin-bottom': '12px' }}>
        <input
          type="text"
          value={this.props.searchTerm}
          className="form-control"
          placeholder="Search"
          aria-describedby="searchIcon"
          onChange={this.props.onSearchTermChanged}
        />
        <span className="input-group-addon" id="searchIcon">🔍</span>
      </div>
    );
  }

}

SearchEntry.propTypes = {
  visible: React.PropTypes.bool.isRequired,
  onSearchTermChanged: React.PropTypes.func.isRequired,
  searchTerm: React.PropTypes.string.isRequired,
};

export default SearchEntry;
