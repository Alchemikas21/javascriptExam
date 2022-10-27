/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const convertWeight = document
  .querySelector("#weight-convert")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const inputWeight = document.querySelector("#search").value;
    const convertToPounds = inputWeight * 2.2046;
    const convertToGrams = inputWeight / 0.001;
    const convertToOunces = inputWeight * 35.274;
    const outputContainer = document.querySelector("#output");

    console.log(convertToPounds, convertToGrams, convertToOunces);

    const createdHeaderElement = document.createElement("h");
    outputContainer.appendChild(createdHeaderElement);
    createdHeaderElement.textContent = "This is your converted weight!";
    createdHeaderElement.style =
      "display: flex;margin-left:auto;margin-right:auto ;font-size:30px;font-weight:500;border: 3px inset gray ; width: 50%; justify-content:center; padding: 10px 10px; background-color: white; color:red;border-radius:10px 10px 0px 0px";

    const createdparagraphElement = document.createElement("p");
    outputContainer.appendChild(createdparagraphElement);
    createdparagraphElement.innerText = `${convertToPounds}lbs  ${convertToGrams}g ${convertToOunces}oz`;
    createdparagraphElement.style =
      "display: flex; justify-content:center; padding: 10px 10px;margin-left:auto;margin-right:auto;font-size: 20px; border: 3px inset gray; width: 50%; justify-content:center; background-color: pink; border-radius:0px 0px 10px 10px";
  });
