async function getOrders() {
  alert("starting to get orders");
  let x = await fetch("https://lightsandpartsapi.azurewebsites.net/api/shopify-storefront/customer-orders?customerid=29847");
  let y = await x.text();
  alert(y);
}


getOrders();