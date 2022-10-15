function createRestaurant(foodPlace) {
  var restaurant = {
    name: foodPlace,
    menus: {
      breakfast: [], //arrays will hold various objects
      lunch: [],
      dinner: []
    }
  }
  return restaurant
}

function addMenuItem(foodPlace, menuDish) {
    if(menuDish.type === 'breakfast' && !foodPlace.menus.breakfast.includes(menuDish)) {
      foodPlace.menus.breakfast.push(menuDish)
      return foodPlace.menus.breakfast
    } else if (menuDish.type === 'lunch' && !foodPlace.menus.lunch.includes(menuDish)) {
    foodPlace.menus.lunch.push(menuDish)
      return foodPlace.menus.lunch
    } else if (menuDish.type === 'dinner' && !foodPlace.menus.dinner.includes(menuDish)) {
      foodPlace.menus.dinner.push(menuDish)
      return foodPlace.menus.dinner
    }
}

function removeMenuItem() {
  
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}