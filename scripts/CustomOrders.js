export const Orders = async () => {
  const ordersFetch = await fetch(
    "http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=wheel&_expand=technology"
  );

  const orders = await ordersFetch.json();

  let html = "";

  let ordersHTML = orders.map((order) => {
    const orderPrice =
      order.paint.price +
      order.interior.price +
      order.wheel.price +
      order.technology.price;

    const formattedPrice = orderPrice.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    return `
                <section
                class="custom-orders-list">
                    <div>${order.paint.paint} car with ${order.wheel.wheel}, ${order.interior.style}, and the ${order.technology.packages} for a total cost of ${formattedPrice}</div>
                </section>`;
  });

  html += ordersHTML.join("");

  return html;
};
