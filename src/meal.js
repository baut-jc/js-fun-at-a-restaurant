function nameMenuItem(food) {
  return `Delicious ${food}`
}

function createMenuItem(name, price, type) {
  var menu = {
    name: name,
    price: price,
    type: type
  }
  return menu
}

function addIngredients(food, ingredients) {
  if (!ingredients.includes(food)) {
    return ingredients.push(food)
  }
}

function formatPrice(price) {
  return `$${price}`
}

// function decreasePrice() {
//   return 
// }

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  // createRecipe
}


