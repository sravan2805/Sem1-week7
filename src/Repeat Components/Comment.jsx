import React from 'react';

function Comment({ author, content }) {
  return (
    <div style={commentStyle}>
      <h4>{author}</h4>
      <p>{content}</p>
    </div>
  );
}

const commentStyle = {
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  marginBottom: '10px',
};

export default Comment;
