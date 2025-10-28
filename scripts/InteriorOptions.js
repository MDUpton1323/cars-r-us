const changeHandler = (changeEvent) => {
  if (changeEvent.target.id === "style") {
    const chosenOption = changeEvent.target.value;
    console.log(parseInt(chosenOption));
  }
};

document.addEventListener("change", changeHandler);

export const InteriorOptions = async () => {
  const response = await fetch("http://localhost:8088/interior");
  const interior = await response.json();

  let optionsHTML = `<select id="style">
  <option value="0">Select an interior material</option>`;

  const divStringArray = interior.map((i) => {
    return `<option value="${i.id}">${i.style}</option>`;
  });

  optionsHTML += divStringArray.join("");
  optionsHTML += `</select>`;

  return optionsHTML;
};
