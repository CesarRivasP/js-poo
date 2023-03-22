// EXAMPLES
// Problema resuelto SIN recursividad.
let numerito = 0;
while (numerito < 5) {
  console.log(numerito);
  numerito++;
}

// Problema resuelto CON recursividad.
function recursiveExample(numerito) {
  console.log(numerito);
  if (numerito < 5) {
    return recursive(numerito + 1);
  } else {
    return 5;
  }
}

// Practica.
const numbers = [0, 1, 2, 0, 12, 3, 2, 3, 12, 1, 2, 1, 2, 1, 3, 1, 2, 3, 3, 1];

// let number = 0;
// for(let index = 0; index < numbers.length; index++) {
//   console.log({index, number})
// }

function recursive(numbersArray) {
  if (numbersArray.length !== 0) {
    // Llamados recursivos
    const firstNum = numbersArray[0];
    console.log(firstNum, "firstNum");
    numbersArray.shift();
    recursive(numbersArray);
  }
}

// ---- DEEP COPY ----
function isObject(subject) {
  return typeof subject === "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

// ---- Abstracción con objetos literales y deep copy ----
// * Sin necesidad de utilizar prototipos ni clases
const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
};

const cesar = deepCopy(studentBase);

// Object.defineProperty(cesar, "name", {
//   value: "César",
//   configurable: false, // Para que no se pueda borrar esta porpiedad
//   * Las demas propiedades por default estan en true
// });

/*
 * Otra forma de hacer la anterior tarea en menos lineas.
 * Nos permite verificar si todas las propiedades del objeto tienen la propiedad
 * **configurable** en false.
 */
Object.seal(cesar);

/*
 * Nos permite verificar si todas las propiedades del objeto tienen la propiedad
 * **writable** en false.
 */
Object.isFrozen(cesar);
