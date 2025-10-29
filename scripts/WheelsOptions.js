import { setWheelChoice } from "./TransientState.js";

const handleWheelChoice = (changeEvent) => {
  if (changeEvent.target.id === "wheel") {
    const wheelId = parseInt(changeEvent.target.value);
    console.log("Wheel ID selected", wheelId);
    setWheelChoice(wheelId);
  }
};

document.addEventListener("change", handleWheelChoice);

export const WheelsOptions = async () => {
  const response = await fetch("http://localhost:8088/wheels");
  const wheels = await response.json();

  let optionsHTML = `<select id="wheel">
  <option value="0">Select a wheel style</option>`;

  const divStringArray = wheels.map((wheel) => {
    return `<option value="${wheel.id}">${wheel.wheel}</option>`;
  });

  optionsHTML += divStringArray.join("");
  optionsHTML += `</select>`;

  return optionsHTML;
};
