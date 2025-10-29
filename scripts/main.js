import { PaintOptions } from "./PaintOptions.js";
import { InteriorOptions } from "./InteriorOptions.js";
import { WheelsOptions } from "./WheelsOptions.js";
import { TechnologyOptions } from "./TechnologyOptions.js";
import { CustomOrder } from "./PlaceOrder.js";
import { Orders } from "./CustomOrders.js";

const render = async () => {
  console.log("Render function called");
  const paintOptionsHTML = await PaintOptions();
  const interiorOptionsHTML = await InteriorOptions();
  const wheelOptionsHTML = await WheelsOptions();
  const techonologyOptionsHTML = await TechnologyOptions();
  const placeOrderHTML = CustomOrder();
  const ordersHTML = await Orders();

  const container = document.querySelector("#container");

  const composedHTML = `
        <h1>Cars 'R Us: Personal Car Builder</h1>
    
        <article class="choices">
            <section class="choices__paints options">
                <h2>Paints</h2>
                ${paintOptionsHTML}
            </section>
        
            <section class="choices__interior options">
                <h2>Interior</h2>
                ${interiorOptionsHTML}
            </section>
        
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${wheelOptionsHTML}
            </section>

            <section class="choices__technology options">
                <h2>Technologies</h2>
                ${techonologyOptionsHTML}
            </section>
        </article>
    
        <article class="order">
                ${placeOrderHTML}
        </article>
    
        <article class="customOrders">
            <h2>Custom Car Orders</h2>
                ${ordersHTML}
        </article>
    `;

  container.innerHTML = composedHTML;
};

document.addEventListener("newCustomOrderPlaced", (event) => {
  console.log("State of data has changed. Regenerating HTML...");
  render();
});

render();
