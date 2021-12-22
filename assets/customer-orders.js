async function getOrders() {
  fetch("https://lightsandpartsapi.azurewebsites.net/api/shopify-storefront/customer-orders?customerid=10532")
    .then(response => response.json())
    .then(orders => {
      orders.forEach(order => {
        ordrsHTML += `<div>${order.OrderId}-${order.OrderDate}-${order.Total}</div>`;
      });
      $("#customer_orders").html(ordrsHTML);
    });
}

getOrders();