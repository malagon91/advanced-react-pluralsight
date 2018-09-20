import React from 'react';
import styles from './styles';

const convertDate = (dateString) => new Date(dateString).toDateString();
const Article = (props) =>{
  const {article, actions} = props;
  const author = actions.lookupAuthor(article.authorId);
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

export default Article;