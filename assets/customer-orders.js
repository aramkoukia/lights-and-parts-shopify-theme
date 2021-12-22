async function getOrders() {
  fetch("https://lightsandpartsapi.azurewebsites.net/api/shopify-storefront/customer-orders?customerid=10532")
    .then(response => response.json())
    .then(orders => {
      let ordrsHTML = "";
      orders.forEach(order => {
        ordrsHTML += `<div>${order.orderId}-${order.orderDate}-${order.total}</div>`;
      });
      $("#customer_orders").html(ordrsHTML);
    });
}

getOrders();