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

  console.log('objects: ', foodPlace.menus, foodPlace.menus[menuType])
  console.log('string: ', menuDishName) //objects in Array; access all in object
  for (var i = 0; i < foodPlace.menus[menuType].length; i++) {
    if (foodPlace.menus[menuType][i].name === menuDishName) {
        foodPlace.menus[menuType].splice(0, 1)
        // console.log('remove from array: ', foodPlace.menus[menuType].splice(0, 1))
      return `No one is eating our ${menuDishName} - it has been removed from the ${menuType} menu!`
    }
  }
  return `Sorry, we don't sell ${menuDishName}, try adding a new recipe!`
}

  //if not an object in array; return Sorry, we don't sell ${menuDishName}, try adding a new recipe!
      //access the different menus array, dynamically to get to the array's object's foodName/menuDish
        //menuType === menuDish.type
      //declare variable/for loop?


module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}