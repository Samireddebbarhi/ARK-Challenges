function cakes(recipe, availableIngredients) {
  let maxCakes = Infinity;
  for (const ingredient in recipe) {
    if (availableIngredients.hasOwnProperty(ingredient)) {
      const recipeAmount = recipe[ingredient];
      const availableAmount = availableIngredients[ingredient];

      const cakesWithIngredient = Math.floor(availableAmount / recipeAmount);
      maxCakes = Math.min(maxCakes, cakesWithIngredient);
    } else {
      return 0;
    }
  }

  return maxCakes;
}
