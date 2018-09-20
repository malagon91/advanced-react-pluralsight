import React from 'react';
import DataApi from '../DataApi';
import {data} from '../testData.json';
import ArticleList from './ArticleList';
const api = new DataApi(data);
class App extends React.Component {
  state = {
    articles: api.getArticles(),
    authors: api.getAuthors()     
  };
  asyncFunct = () => {
    return Promise.resolve(37);
  };
  async componentDidMount(){
    this.setState({
      answer: await this.asyncFunct()
    });
  }
  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  }
  render(){
    return(
      <div>
        <ArticleList articles={this.state.articles} articleActions={this.articleActions}/>
      </div>
    );
  }
}

export default App;
