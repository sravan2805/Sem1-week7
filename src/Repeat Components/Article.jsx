import React from 'react';

function Article({ title, content }) {
  return (
    <div style={articleStyle}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

const articleStyle = {
  borderBottom: '1px solid #ddd',
  paddingBottom: '10px',
  marginBottom: '10px',
};

export default Article;
