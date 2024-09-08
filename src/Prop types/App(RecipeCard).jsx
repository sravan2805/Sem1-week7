// App.js
import React from 'react';
import RecipeCard from './RecipeCard';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <RecipeCard
        recipeName="Spaghetti Carbonara"
        ingredients={["Spaghetti", "Eggs", "Pancetta", "Parmesan", "Black Pepper"]}
        cookingTime={30}
      />
      <RecipeCard
        recipeName="Chicken Curry"
        ingredients={["Chicken", "Onions", "Garlic", "Ginger", "Tomatoes", "Spices"]}
        cookingTime={45}
      />
      <RecipeCard
        recipeName="Vegetable Stir Fry"
        ingredients={["Bell Peppers", "Broccoli", "Carrots", "Soy Sauce", "Garlic"]}
        cookingTime={20}
      />
    </div>
  );
};

export default App;
