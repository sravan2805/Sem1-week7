import React from 'react';
import Article from './Article';

function ArticleList({ articles }) {
  return (
    <div>
      {articles.map(article => (
        <Article key={article.id} title={article.title} content={article.content} />
      ))}
    </div>
  );
}

export default ArticleList;
