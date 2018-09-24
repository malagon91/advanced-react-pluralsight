import React, {PureComponent} from 'react';
import Article from './Article';
//it's better to use a pure component instead a function component beccause the func component 
//renders if his props are the same, and the pure component if the props are the same not render itself
class ArticleList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        {Object.values(this.props.articles).map((article) => 
          <Article key={article.id} article={article} 
          />)}
      </div>
    );
  }
}

export default ArticleList;
// const ArticleList = (props) =>{
//   return (
//     <div>
//       {Object.values(props.articles).map((article) => 
//         <Article key={article.id} article={article} 
//         />)}
//     </div>
//   );
// };//store={props.store}
// export default ArticleList;