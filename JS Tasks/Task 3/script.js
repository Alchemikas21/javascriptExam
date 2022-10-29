/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";



const state = {};

  const createTable = () => {
    const outputContainer = document.querySelector("#output-container");

    const userName = document.createElement("th");
    userName.innerHTML = "userName";

    const userImage = document.createElement("th");
    userImage.innerHTML = "userImage";

    const tr = document.createElement("tr");
    tr.append(userName, userImage);

    const thead = document.createElement("thead");
    thead.append(tr);

    const table = document.createElement("table");
    table.append(thead, document.createElement("tbody"));
    outputContainer.append(table);
  };

const populateTable = (users) => {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  users.forEach((user) => {
    const userName = document.createElement("td");
    userName.innerHTML = user.login;

    const img = document.createElement("img");
    img.src = user.avatar_url;
    img.setAttribute("alt", "UserPicture");
    const userImage = document.createElement("td");
    userImage.append(img);

    const tr = document.createElement("tr");
    tr.append(userName, img);
    tbody.append(tr);
  });
};

createTable()

document.querySelector('#btn').addEventListener('click', fetchData
)

async function fetchData() {
  try {
    let response = await fetch("https://api.github.com/users");
    if (response.ok) {
      state.users = await response.json();
       populateTable(state.users);


 
    }
  } catch (error) {
    console.error(error);
  }
}




