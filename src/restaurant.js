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
  console.log('expected object with type: ', foodName.type)
  // console.log(foodPlace.menus.lunch)
  // for(var i = 0; i < foodPlace.menus.lunch.length; i++)
    if(foodName.type === 'breakfast') {
      foodPlace.menus.breakfast.push(foodName)
    } else if (foodName.type === 'lunch') {
    foodPlace.menus.lunch.push(foodName)
    } else if (foodName.type === 'dinner') {
      foodPlace.menus.dinner.push(foodName)
    }
    

  // console.log('length: ', foodPlace.menus.lunch.length)
  // console.log('foodName: ', foodPlace.menus.lunch[i])
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}