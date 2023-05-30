const isAdult = (name, age) => {
  if (age > 18) {
    console.log('Hola ' + name + ', eres mayor de edad');
  } else if (age < 18) {
    console.log('Hola ' + name + ', eres menor de edad');
  }
};
isAdult('Eugenia', 22);

const greatestNumber = (number1, number2) => {
  if (number1 > number2) {
    console.log('El número mayor es ' + number1);
  } else if (number1 < number2) {
    console.log('El número mayor es ' + number2);
  }
};
greatestNumber(15, 10);

const positiveNumbers = number => {
  if (number > 0) {
    console.log('El número ' + number + ' es positivo');
  } else if (number < 0) {
    console.log('El número ' + number + ' es negativo');
  } else {
    console.log('El número ' + number + ' es cero');
  }
};
positiveNumbers(0);

const calculateAverage = (classNote1, classNote2, classNote3) => {
  const average = (classNote1 + classNote2 + classNote3) / 3;
  if (average > 0 && average < 5) {
    console.log('Has sacado un ' + average + ' , estás supendido');
  } else if (average >= 5 && average < 8) {
    console.log('Has sacado un ' + average + ' , estás aprobado');
  } else {
    console.log('Has sacado un ' + average + ' , tienes matrícula de honor');
  }
};
calculateAverage(9, 9, 9);

const smallestNumber = (number1, number2, number3) => {
  if (number1 < number2 && number1 < number3) {
    console.log('El número menor es ' + number1);
  } else if (number1 > number2 && number2 < number3) {
    console.log('El número menor es ' + number2);
  } else {
    console.log('El número menor es ' + number3);
  }
};
smallestNumber(2, 0, 1);

const divisibleNumber = number => {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log('El número ' + number + ' es divisble por 3 y 5');
  } else if (number % 5 === 0) {
    console.log('El número ' + number + ' es divisible por 5');
  } else if (number % 3 === 0) {
    console.log('El número ' + number + ' es divisible por 3');
  } else {
    console.log(number);
  }
};
divisibleNumber(15);

const evenNumber = number => {
  if (number % 2 === 0) {
    console.log('El número ' + number + ' es un número par');
  } else {
    console.log('El número ' + number + ' es un número impar');
  }
};
evenNumber(1);

const isLeap = year => {
  if (year % 4 === 0 || (year % 400 === 0 && year % 100 !== 0)) {
    console.log('El año ' + year + ' es bisiesto');
  } else {
    console.log('El año ' + year + ' no es bisiesto');
  }
};
isLeap(2020);

const numbersArray = numbers => {
  const sum = numbers[0] + numbers[1] + numbers[2];
  const average = sum / 2;
  console.log(
    'La suma de todos los numeros es ' +
      sum +
      ' y la media de ellos es ' +
      average
  );
  if (numbers[0] < numbers[1] && numbers[0] < numbers[2]) {
    console.log('El número menor es ' + numbers[0]);
  } else if (numbers[1] < numbers[0] && numbers[1] < numbers[2]) {
    console.log('El número menor es ' + numbers[1]);
  } else {
    console.log('El número menor es ' + numbers[2]);
  }
  if (numbers[0] > numbers[1] && numbers[0] > numbers[2]) {
    console.log('El número mayor es ' + numbers[0]);
  } else if (numbers[1] > numbers[0] && numbers[1] > numbers[2]) {
    console.log('El número mayor es ' + numbers[1]);
  } else {
    console.log('El número menor es ' + numbers[2]);
  }
};

numbersArray([2, 3, 1]);
