import { setInteriorChoice } from "./TransientState.js";

const handleInteriorChoice = (changeEvent) => {
  if (changeEvent.target.id === "style") {
    const interiorId = parseInt(changeEvent.target.value);
    console.log("Interior ID selected", interiorId);
    setInteriorChoice(interiorId);
  }
};

document.addEventListener("change", handleInteriorChoice);

export const InteriorOptions = async () => {
  const response = await fetch("http://localhost:8088/interiors");
  const interiors = await response.json();

  let optionsHTML = `<select id="style">
  <option value="0">Select an interior material</option>`;

  const divStringArray = interiors.map((i) => {
    return `<option value="${i.id}">${i.style}</option>`;
  });

  optionsHTML += divStringArray.join("");
  optionsHTML += `</select>`;

  return optionsHTML;
};
