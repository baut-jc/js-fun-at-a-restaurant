function takeOrder(order, deliveryOrders) {
 if (order.orderType === 'delivery') {
    return deliveryOrders.push(order)
 } if (deliveryOrders.length >= 3)
  console.log(deliveryOrders.splice(3, 1))
}

module.exports = {
  takeOrder,
  // refundOrder,
  // listItems,
  // searchOrder
}