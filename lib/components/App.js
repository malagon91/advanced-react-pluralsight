import React from 'react';
import axios from 'axios';
import DataApi from 'state-api';
//import {data} from '../testData.json';
import ArticleList from './ArticleList';
//const api = new DataApi(data);
class App extends React.Component {
  // state = {
  //   articles: this.props.initialData.articles,
  //   authors: this.props.initialData.authors,
  // };
  //use store
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
  render(){
    return(
      <div>
        <ArticleList articles={this.state.articles} store={this.props.store}/>
      </div>
    );
  }
}

export default App;
