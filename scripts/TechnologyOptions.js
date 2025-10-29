import { setTechnologyChoice } from "./TransientState.js";

const handleTechnologyChoice = (changeEvent) => {
  if (changeEvent.target.id === "packages") {
    const technologyId = parseInt(changeEvent.target.value);
    console.log("Technology ID selected", technologyId);
    setTechnologyChoice(technologyId);
  }
};

document.addEventListener("change", handleTechnologyChoice);

export const TechnologyOptions = async () => {
  const response = await fetch("http://localhost:8088/technologies");
  const technologies = await response.json();

  let optionsHTML = `<select id="packages">
  <option value="0">Select a technology package</option>`;

  const divStringArray = technologies.map((technology) => {
    return `<option value="${technology.id}">${technology.packages}</option>`;
  });

  optionsHTML += divStringArray.join("");
  optionsHTML += `</select>`;

  return optionsHTML;
};
