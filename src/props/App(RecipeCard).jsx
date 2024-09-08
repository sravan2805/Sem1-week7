// App.js
import React from 'react';
import RecipeCard from './RecipeCard';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <RecipeCard
        recipeName="Spaghetti Bolognese"
        ingredients={['Spaghetti', 'Ground beef', 'Tomato sauce', 'Garlic', 'Onion', 'Olive oil']}
        cookingTime="45 minutes"
      />
      <RecipeCard
        recipeName="Chicken Curry"
        ingredients={['Chicken', 'Curry powder', 'Coconut milk', 'Garlic', 'Ginger', 'Onion']}
        cookingTime="30 minutes"
      />
      <RecipeCard
        recipeName="Caesar Salad"
        ingredients={['Romaine lettuce', 'Croutons', 'Parmesan cheese', 'Caesar dressing']}
        cookingTime="15 minutes"
      />
      <RecipeCard
        recipeName="Beef Tacos"
        ingredients={['Tortillas', 'Ground beef', 'Lettuce', 'Cheese', 'Tomato', 'Sour cream']}
        cookingTime="25 minutes"
      />
    </div>
  );
};

export default App;
