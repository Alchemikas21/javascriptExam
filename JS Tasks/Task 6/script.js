/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20 },
  { id: "2", name: "Ann Smith", age: 24 },
  { id: "3", name: "Tom Jones", age: 31 },
  { id: "4", name: "Rose Peterson", age: 17 },
  { id: "5", name: "Alex John", age: 25 },
  { id: "6", name: "Ronald Jones", age: 63 },
  { id: "7", name: "Elton Smith", age: 16 },
  { id: "8", name: "Simon Peterson", age: 30 },
  { id: "9", name: "Daniel Cane", age: 51 },
];

//1 pratimas//

const getUserAverageAge = () => {
  let userAgeList = users.map((x) => x.age);

  const initialValue = 0;
  const averageUserAge =
    userAgeList.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    ) / userAgeList.length;

  console.log(averageUserAge);
};

getUserAverageAge();

//2 pratimas//

const getUserNames = () => {
  const userNameList = users.map((x) => x.name);

  console.log(userNameList);
};

getUserNames();
