/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  constructor(sum, substraction, multiplication, division) {
    this.sum = sum;
    this.substraction = substraction;
    this.multiplication = multiplication;
    this.division = division;
    this.calculateResults = (a, b) => {
      this.sum = a + b;
      this.substraction = a - b;
      this.multiplication = a * b;
      this.division = a / b;

    };
  }
}
const firstOperation = new Calculator();
firstOperation.calculateResults(2, 2);

console.log(firstOperation)


const secondOperation = new Calculator();
secondOperation.calculateResults(10,10);
console.log(secondOperation)