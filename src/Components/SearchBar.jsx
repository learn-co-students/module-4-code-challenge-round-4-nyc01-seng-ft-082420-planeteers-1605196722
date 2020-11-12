import React from 'react';

class SearchBar extends React.Component {


  render() {
    return (
      <form>
        <input placeholder="Search" value={this.props.searchValue} onChange={this.props.searchHandler}/>
      </form>
    )
  }

}

export default SearchBar;
