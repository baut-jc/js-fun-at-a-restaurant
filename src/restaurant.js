function createRestaurant(restau) {
  var restaurant = {
    name: restau,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return restaurant
}

module.exports = {
  createRestaurant, 
  // addMenuItem,
  // removeMenuItem
}