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

// const verbs = (verb1, verb2) => {
//   if (verb1.endsWith('ar') && verb2.endsWith('ar')) {
//     console.log('Los verbos son de la primera conjugación');
//   } else if (verb1.endsWith('ar') && verb2.endsWith('er')) {
//     console.log(
//       'El primer verbo es de la primera conjugación y el segundo de la segunda'
//     );
//   } else if (verb1.endsWith('ar') && verb2.endsWith('ir')) {
//     console.log(
//       'El primer verbo es de la primera conjugación y el segundo de la tercera'
//     );
//   } else if (verb1.endsWith('er') && verb2.endsWith('ar')) {
//     console.log(
//       'El primer verbo es de la segunda conjugación y el segundo de la primera'
//     );
//   } else if (verb1.endsWith('er') && verb2.endsWith('er')) {
//     console.log('Los verbos son de la segunda conjugación');
//   } else if (verb1.endsWith('er') && verb2.endsWith('ir')) {
//     console.log(
//       'El primer verbo es de la segunda conjugación y el segundo de la tercera'
//     );
//   } else if (verb1.endsWith('ir') && verb2.endsWith('ar')) {
//     console.log(
//       'El primer verbo es de la tercera conjugación y el segundo de la primera'
//     );
//   } else if (verb1.endsWith('ir') && verb2.endsWith('er')) {
//     console.log(
//       'El primer verbo es de la tercera conjugación y el segundo de la segunda'
//     );
//   } else if (verb1.endsWith('ir') && verb2.endsWith('ir')) {
//     console.log('Los verbos son de la tercera conjugación');
//   }
// };

// verbs('correr', 'andar');

const verbs = (verb1, verb2) => {
  if (verb1.endsWith('ar') && verb2.endsWith('ar')) {
    console.log('Los verbos son de la primera conjugación');
  } else if (verb1.endsWith('ar') && verb2.endsWith('er')) {
    console.log(
      'El primer verbo es de la primera conjugación y el segundo de la segunda'
    );
  } else if (verb1.endsWith('ar') && verb2.endsWith('ir')) {
    console.log(
      'El primer verbo es de la primera conjugación y el segundo de la tercera'
    );
  } else if (verb1.endsWith('er') && verb2.endsWith('ar')) {
    console.log(
      'El primer verbo es de la segunda conjugación y el segundo de la primera'
    );
  } else if (verb1.endsWith('er') && verb2.endsWith('er')) {
    console.log('Los verbos son de la segunda conjugación');
  } else if (verb1.endsWith('er') && verb2.endsWith('ir')) {
    console.log(
      'El primer verbo es de la segunda conjugación y el segundo de la tercera'
    );
  } else if (verb1.endsWith('ir') && verb2.endsWith('ar')) {
    console.log(
      'El primer verbo es de la tercera conjugación y el segundo de la primera'
    );
  } else if (verb1.endsWith('ir') && verb2.endsWith('er')) {
    console.log(
      'El primer verbo es de la tercera conjugación y el segundo de la segunda'
    );
  } else if (verb1.endsWith('ir') && verb2.endsWith('ir')) {
    console.log('Los verbos son de la tercera conjugación');
  }
};

verbs('correr', 'andar');

// Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona". Resuelve el ejercicio con una sóla línea dentro de la función.

const generateWord = (word1, word2, word3) => {
  const randomNumber1 = Math.floor(Math.random() * word1.length);
  const randomNumber2 = Math.floor(Math.random() * word1.length);
  const randomNumber3 = Math.floor(Math.random() * word2.length);
  const randomNumber4 = Math.floor(Math.random() * word2.length);
  const randomNumber5 = Math.floor(Math.random() * word3.length);
  const randomNumber6 = Math.floor(Math.random() * word3.length);
  return (
    word1.charAt(randomNumber1) +
    word1.charAt(randomNumber2) +
    word2.charAt(randomNumber3) +
    word2.charAt(randomNumber4) +
    word3.charAt(randomNumber5) +
    word3.charAt(randomNumber6)
  );
};

const wordGenerate = generateWord('hola', 'adios', 'mano');
console.log(wordGenerate);

// Crea una función que reciba un email e imprima por separado el nombre y el dominio. "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com".

const webSite = domain => {
  console.log('El usuario es ' + domain.substring(0, domain.indexOf('@')));
  console.log('El dominio es ' + domain.substring(domain.indexOf('@') + 1));
};

webSite('eugenia@gmail.com');

// Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas y minúsculas, por ejemplo, si recibe "adios" deberá devolver "aDiOs

const letters = word => {
  return (
    word.charAt(0).toLowerCase() +
    word.charAt(1).toUpperCase() +
    word.charAt(2).toLowerCase() +
    word.charAt(3).toUpperCase() +
    word.charAt(4).toLowerCase()
  );
};

const lettersTransform = letters('adios');
console.log(lettersTransform);
