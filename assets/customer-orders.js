async function getOrders() {
  fetch("https://lightsandpartsapi.azurewebsites.net/api/shopify-storefront/customer-orders?customerid=10532")
    .then(response => response.json())
    .then(data => {
      for (i = 0; i < y.length; i++) {
        ordrsHTML += `<div>${y[i].OrderId}-${y[i].OrderDate}-${y[i].Total}</div>`;
      }

      $("#customer_orders").html(ordrsHTML);
    });
}

getOrders();