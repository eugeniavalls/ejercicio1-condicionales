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

const generateRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomNumber = generateRandomNumber(1, 5);
console.log(randomNumber);

// Crea una función que reciba una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas. Resuelve el ejercicio con un if-else

// toLowerCase(): Éste método devuelve la cadena en minúsculas.
// 	const string = ‘HOLA’;
// 	string.toLowerCase ((esto va siempre vacio)) // hola

// toUpperCase(): Éste método devuelve la cadena en mayúsculas.
// 	const string = ‘hola’;
// 	string.toUpperCase ((esto va siempre vacio)) // HOLA

const wordLength = word => {
  if (word.length > 5) {
    console.log(word.toUpperCase());
  } else if (word.length < 5) {
    console.log(word.toLowerCase());
  }
};
wordLength('eugenia');

// Repite el ejercicio anterior resolviendolo con un operador ternario

const wordLength2 = word => {
  word.length2 > 5
    ? console.log(word.toUpperCase())
    : console.log(word.toLowerCase());
};
wordLength2('hola');

// Crea una función que reciba 2 verbos. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación".

const verbs = verb => {
  if (verb.endsWith('ar')) {
    console.log('El verbo andar es de la primera conjugación');
  } else if (verb.endsWith('er')) {
    console.log('El verbo correr es de la segunda conjugación');
  }
};

verbs('correr');
