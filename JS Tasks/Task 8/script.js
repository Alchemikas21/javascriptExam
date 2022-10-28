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
    this.calculateSum = (a, b) => {
      this.sum = a + b;
    };

    this.calculateSubstraction = (a, b) => {
      this.substraction = a - b;
    };

    this.calculateMulitiplication = (a, b) => {
      this.multiplication = a * b;
    };

    this.calculateDivision = (a, b) => {
      this.division = a / b;
    };
  }
}
const firstOperation = new Calculator();
firstOperation.calculateSum(2, 2);
console.log(firstOperation.sum);

const secondOperation = new Calculator();
secondOperation.calculateMulitiplication(10, 10);
console.log(secondOperation.multiplication);

const thirdOperation = new Calculator();
thirdOperation.calculateSubstraction(12, 1);
console.log(thirdOperation.substraction);

const fourthOperation = new Calculator();
fourthOperation.calculateDivision(5, 2);
console.log(fourthOperation.division);
