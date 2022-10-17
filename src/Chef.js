class Chef {
  constructor(name, restaurant) {
    this.name = name
    this.restaurant = restaurant
    
  }
  greetCustomer(customer) {
    if(customer === 'Amy') {
      return `Good morning, ${customer}!`
    } else {
    return `Hello, ${customer}!`
    }
  }
  checkForFood(menuDishName) {
    // for (var i = 0; i < menuDishName.menus.length; i++)
     if (menuDishName.name === menuDishName) {
      return `Yes, we're serving ${menuDishName} today!`
     }
  }

}

module.exports = Chef;