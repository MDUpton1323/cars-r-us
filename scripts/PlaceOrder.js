import { saveCustomOrder } from "./TransientState.js";

const handleCustomOrder = (clickEvent) => {
  if (clickEvent.target.id === "placeCustomOrder-button") {
    console.log("Button Clicked!");
    saveCustomOrder();
  }
};

export const CustomOrder = () => {
  document.addEventListener("click", handleCustomOrder);
  return `<button id="placeCustomOrder-button">Create Custom Order</button>`;
};
