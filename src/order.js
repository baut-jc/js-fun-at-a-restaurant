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


module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}