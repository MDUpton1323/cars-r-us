const transientState = {
  paintId: 0,
  interiorId: 0,
  wheelId: 0,
  technologyId: 0,
};

export const setPaintChoice = (chosenPaint) => {
  transientState.paintId = chosenPaint;
};

export const setInteriorChoice = (chosenInterior) => {
  transientState.interiorId = chosenInterior;
};

export const setWheelChoice = (chosenWheel) => {
  transientState.wheelId = chosenWheel;
};

export const setTechnologyChoice = (chosenTechnology) => {
  transientState.technologyId = chosenTechnology;
};

export const saveCustomOrder = async () => {
  if (
    transientState.paintId === 0 ||
    transientState.interiorId === 0 ||
    transientState.wheelId === 0 ||
    transientState.technologyId === 0
  ) {
    window.alert("Please complete all fields before submitting the form.");
    return;
  }

  const postOptions = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(transientState),
  };

  const response = await fetch("http://localhost:8088/orders", postOptions);

  const customEvent = new CustomEvent("newCustomOrderPlaced");
  document.dispatchEvent(customEvent);
};
