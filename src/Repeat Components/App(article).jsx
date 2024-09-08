import React from 'react';
import ArticleList from './ArticleList';

function App() {
  const articles = [
    { id: 1, title: 'React Basics', content: 'This article covers the basics of React.' },
    { id: 2, title: 'State and Props', content: 'Learn about state and props in React.' },
    { id: 3, title: 'Component Lifecycle', content: 'Understanding the component lifecycle in React.' },
  ];

  return (
    <div>
      <h1>Article List</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
