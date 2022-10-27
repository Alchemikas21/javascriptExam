/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const countButton = document.querySelector("#btn__element");
let counter = 0;
countButton.addEventListener("click", () => {
  counter++;
  const countDisplayElement = document.querySelector("#btn__state");
  countDisplayElement.innerText = counter;
});
