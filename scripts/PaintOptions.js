const changeHandler = (changeEvent) => {
  if (changeEvent.target.id === "paint") {
    const chosenOption = changeEvent.target.value;
    console.log(parseInt(chosenOption));
  }
};

document.addEventListener("change", changeHandler);

export const PaintOptions = async () => {
  const response = await fetch("http://localhost:8088/paints");
  const paints = await response.json();

  let optionsHTML = `<select id="paint">
  <option value="0">Select a paint color</option>`;

  const divStringArray = paints.map((paint) => {
    return `<option value="${paint.id}">${paint.paint}</option>`;
  });

  optionsHTML += divStringArray.join("");
  optionsHTML += `</select>`;

  return optionsHTML;
};
