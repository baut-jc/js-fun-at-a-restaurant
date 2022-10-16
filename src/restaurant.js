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

function addMenuItem(foodPlace, menuDish) { //(object,  object: restaurant.menus.*breakfast[i])
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

function removeMenuItem(foodPlace, menuDishName, menuType) {
  // for (var i = 0; i < foodPlace.menus.length; i++)
  console.log('objects: ', foodPlace.menus.menuDish) //objects in Array; access all in object
  for (var i = 0; i < foodPlace.menus.breakfast.length; i++) {
    foodPlace.menus.breakfast.splice(0, 1)
    return `No one is eating our ${menuDishName} - it has been removed from the ${menuType} menu!`
  }
  //if not an object in array; return Sorry, we don't sell ${}, try adding a new recipe!
      //access the different menus array, dynamically to get to the array's object's foodName/menuDish
        //menuType === menuDish.type
      //declare variable/for loop?
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}