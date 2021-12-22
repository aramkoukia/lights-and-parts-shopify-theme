async function getOrders() {
  alert("starting to get orders");
  let x = await fetch("https://lightsandpartsapi.azurewebsites.net/api/shopify-storefront/customer-orders?customerid=10532");
  let y = await x.text();

  alert(y.length);

  for (i = 0; i < y.length; i++) {
    ordrsHTML += `<div>${y[i].OrderId}-${y[i].OrderDate}-${y[i].Total}</div>`;
  }

  $("#customer_orders").html(ordrsHTML);

  // alert(y);
}

getOrders();