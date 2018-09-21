import React from 'react';
import axios from 'axios';
import DataApi from 'state-api';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
//import {data} from '../testData.json';
import ArticleList from './ArticleList';
import pickby from 'lodash.pickby' ;
import TimeStamp from './TimeStamp';
//const api = new DataApi(data);
class App extends React.Component {
  // state = {
  //   articles: this.props.initialData.articles,
  //   authors: this.props.initialData.authors,
  // };
  //use store
  // begin to use contextApi in the store 
  // declare the types in static 
  static childContextTypes = {
    store: PropTypes.object,
  };
  //use function to get the value from contextApi 
  getChildContext(){
    return {
      store: this.props.store
    };
  }
  state = this.props.store.getState();

/*
  asyncFunct = () => {
    return Promise.resolve(37);
  };*/
  // async componentDidMount(){
  //   const resp = await axios.get('/data');
  //   const api = new DataApi(resp.data);
  //   this.setState(()=>({
  //     articles: api.getArticles(),
  //     authors: api.getAuthors()
  //   }));
  // }
  // articleActions = {
  //   lookupAuthor: (authorId) => this.state.authors[authorId],
  // }
  // setSearchTerm = (searchTerm) =>{
  //   this.setState({searchTerm});
  // }
  onStoreChange = () =>{
    this.setState(this.props.store.getState());
  }

  componentDidMount = () => {//subscribe(callback)
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }
  componentWillUnmount = () => {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  render(){
    let {articles, searchTerm} = this.state;
    if (searchTerm){
      articles = pickby(articles, (value) => {
        return value.title.match(searchTerm) || value.body.match(searchTerm);
      });
    }
    return(
      <div>
        <TimeStamp timestamp={this.state.timestamp}/>
        <SearchBar doSearch={this.props.store.setSearchTerm}/>
        <ArticleList articles={articles} store={this.props.store}/>
      </div>
    );
  }
}

export default App;
