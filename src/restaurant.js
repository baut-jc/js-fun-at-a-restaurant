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
  console.log('expected to print food string: ', menuDish.name)
  console.log('Andrew code ', foodPlace.menus.breakfast.includes('Bacon and Eggs Pizza'))
  // console.log(foodPlace.menus.lunch)
  // for(var i = 0; i < foodPlace.menus.breakfast.length; i++)
  // console.log('test: ', foodPlace.menus.breakfast.includes(menuDish.name))
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

module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}