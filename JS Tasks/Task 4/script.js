/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";






const state = {};

const createTable = () => {

  const carBrand = document.createElement("th");
  carBrand.innerText = "Brand";

  const carModels = document.createElement("th");
  carModels.innerText = "Models";

  const tr = document.createElement("tr");
  tr.append(carBrand, carModels);

  const thead = document.createElement("thead");
  thead.append(tr);

  const table = document.createElement("table");
  table.append(thead, document.createElement('tbody'));
  document.querySelector('#output').append(table);
};

const populateTable = (cars) => {
  const tbody = document.querySelector('tbody');
  tbody.innerText = "";

  cars.forEach((car) => {
    const carBrand = document.createElement("td");
    carBrand.innerText = car.brand;

    const carModels = document.createElement("td");
    carModels.innerText = car.models;

    const tr = document.createElement("tr");
    tr.append(carBrand, carModels);
    tbody.append(tr);
  });
};
createTable()








  async function fetchData() {
    try {
      let response = await fetch("cars.json");
      if (response.ok) {
        state.cars = await response.json();
        populateTable(state.cars);
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData();