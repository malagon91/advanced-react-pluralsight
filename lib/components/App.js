import React from 'react';
import DataApi from '../DataApi';
import {data} from '../testData.json';
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
  render(){
    return(
      <h2>Hello class component -- {this.state.answer}</h2>
    );
  }
}

export default App;
