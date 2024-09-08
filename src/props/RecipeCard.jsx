// RecipeCard.js
import React from 'react';

const RecipeCard = ({ recipeName, ingredients, cookingTime }) => {
  const cardStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    maxWidth: '300px',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const ingredientsStyle = {
    fontSize: '16px',
    color: '#555',
    textAlign: 'left',
    marginBottom: '10px',
  };

  const timeStyle = {
    fontSize: '14px',
    color: '#777',
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{recipeName}</h3>
      <div style={ingredientsStyle}>
        <strong>Ingredients:</strong>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <p style={timeStyle}>Cooking Time: {cookingTime}</p>
    </div>
  );
};

export default RecipeCard;
