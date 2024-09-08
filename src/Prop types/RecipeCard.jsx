// RecipeCard.js
import React from 'react';
import PropTypes from 'prop-types';

const RecipeCard = ({ recipeName, ingredients, cookingTime }) => {
  const cardStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    maxWidth: '300px',
    textAlign: 'left',
  };

  const recipeNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const ingredientsStyle = {
    fontSize: '16px',
    color: '#333',
    marginBottom: '8px',
  };

  const cookingTimeStyle = {
    fontSize: '14px',
    color: '#666',
  };

  return (
    <div style={cardStyle}>
      <h3 style={recipeNameStyle}>{recipeName}</h3>
      <p style={ingredientsStyle}>Ingredients: {ingredients.join(', ')}</p>
      <p style={cookingTimeStyle}>Cooking Time: {cookingTime} minutes</p>
    </div>
  );
};

RecipeCard.propTypes = {
  recipeName: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  cookingTime: PropTypes.number.isRequired,
};

export default RecipeCard;
