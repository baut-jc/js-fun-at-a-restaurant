function createRestaurant(foodPlace) {
  var restaurant = {
    name: foodPlace,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return restaurant
}

function addMenuItem(foodPlace, foodName) {
  // console.log('expected string: ', foodName)
  // console.log(foodPlace.menus.lunch)
  // for(var i = 0; i < foodPlace.menus.lunch.length; i++)
    // if(foodPlace.menus.lunch < foodPlace.menus.lunch.length)
    foodPlace.menus.lunch.push(foodName)

  // console.log('length: ', foodPlace.menus.lunch.length)
  // console.log('foodName: ', foodPlace.menus.lunch[i])
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}