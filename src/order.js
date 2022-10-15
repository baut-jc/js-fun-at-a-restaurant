function takeOrder(order, deliveryOrders) {
  // if (deliveryOrders.length < 3) {
  //   return deliveryOrders.push(order)
  // }
  if (deliveryOrders.length >= 3) {
    return deliveryOrders.splice(3)
  } else {(order.orderType === 'delivery') 
    return deliveryOrders.push(order)
  }
}

function refundOrder(ticket, deliveryOrders) {
  for(var i = 0; i < deliveryOrders.length; i++)
    if(deliveryOrders[i].orderNumber === ticket) {
      return deliveryOrders.splice(i, 1)
    }
}

function listItems(orders) {
  var foods = []
  for(var i = 0; i < orders.length; i++){
    foods.push(orders[i].item)
  }
  return foods.join(', ')
}

function searchOrder(listVariable, itemString) {
  var found = false
  for(var i = 0; i < listVariable.length; i++) {
    if(listVariable[i].item === itemString) {
     found = true
    }
  }
  return found
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}