import React from 'react';
import axios from 'axios';
import DataApi from 'state-api';
import PropTypes from 'prop-types';
import Perf from 'react-addons-perf'; // Library to test the performance in our app
if (typeof window !== 'undefined'){ 
  window.Perf = Perf;}
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
  //this function just pass the values in the state that it needs
  appState(){
    const {articles,searchTerm} = this.props.store.getState();
    return {articles, searchTerm};
  }
  //state = this.props.store.getState();
  state = this.appState();
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
    this.setState(this.appState);
  }

  componentDidMount = () => {//subscribe(callback)
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
    setImmediate(()=>{Perf.start();}); // init the test when this function was called 
    setTimeout(() => {
      Perf.stop();// finish the test  after five seconds
      Perf.printWasted(); // print in console the results 
    }, 5000);
  }
  componentWillUnmount = () => {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  render(){
    let {articles, searchTerm} = this.state;
    const searchTermRE = new RegExp(searchTerm,'i');
    if (searchTerm){
      articles = pickby(articles, (value) => {
        return value.title.match(searchTermRE) || value.body.match(searchTermRE);
      });
    }//<TimeStamp timestamp={this.state.timestamp}/>
    return(
      <div>
        <TimeStamp />
        <SearchBar />
        <ArticleList articles={articles}/>
      </div>
    );
  }
}

export default App;
