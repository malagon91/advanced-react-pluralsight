import React from 'react';
import debounce from 'lodash.debounce'
class SearchBar extends React.Component{
  state = {
    searchTerm: ''
  }
  doSearch =debounce(() =>{
    this.props.doSearch(this.state.searchTerm);
    console.log(this.state.searchTerm);
  },300);
  handleSeacrh = (event) =>{
    this.setState({
      searchTerm: event.target.value
    },()=>{this.doSearch();});
  }

  render(){
    return (
      <input type="search" 
              value={this.state.searchTerm}
              placeholder="Enter search term" 
              onChange={this.handleSeacrh}/>
    );
  }
}

export default SearchBar;