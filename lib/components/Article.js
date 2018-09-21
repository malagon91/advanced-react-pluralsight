import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
//container 
import storeProvider from './storeProvider';

const convertDate = (dateString) => new Date(dateString).toDateString();
const Article = (props) =>{ //add context to get store in contextapi
  //const {article, store} = props;
  const {article, author} = props;
 // const author = store.lookupAuthor(article.authorId);
  return (
  <div style={styles.article}>
    <div style={styles.title}>{article.title}</div>
    <div style={styles.date}>{convertDate(article.date)}</div>
    <div style={styles.author}>
      <a href={author.website}>
        {author.firstName} {author.lastName}
      </a>
    </div>
    <div style={styles.body}>{article.body}</div>
  </div>
  );
};

Article.PropTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    test: PropTypes.string.isRequired,

  })
};


// to can test the article component because if it uses contextApi is more diffult to test it separately 
// we going to generate a wrapper component 
//Replace all of this and generate an single function to container any component 
// //use this to get the context value in app component
// const ArticleContainer = (props,{store}) =>{
//   // this component is only responsabily to extract the store from contextApi
//   return <Article {...props} store={store} />;
// };
// ArticleContainer.contextTypes = {
//   store: PropTypes.object,
// };
//const ArticleContainer = storeProvider(Article);

//mapping extra props 
function extraProps(store,originalProps){
  return {
    author: store.lookupAuthor(originalProps.article.authorId),
  };
}

export default storeProvider(extraProps)(Article);
