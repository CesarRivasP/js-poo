console.log("===== Hola curso intermedio de POO! =====");
const juan = {
  name: "juanito",
  age: 18,
  approvedCourses: ["curso 1"],
  addCourse: function (newCourse) {
    console.log({
      this: this,
      approvedCourses: this.approvedCourses,
      newCourse,
    });
    this.approvedCourses.push(newCourse);
  },
};

console.group();
console.log(Object.keys(juan), "keys");
console.log(Object.getOwnPropertyNames(juan), "getOwnPropertyNames");
console.log(Object.entries(juan), "entries");
console.groupEnd();

Object.entries(juan)[0];
Object.entries(juan)[3][1];

/* Error
 * Uncaught TypeError: Cannot read properties of undefined (reading 'push')
 * this.approvedCourses es undefined porque al aplicar Object.entries se esta transformando el objecto a un Array.
 * y this ya no estaria haciendo referencia al objeto *Juan*, sino al Array.
 * Object {}
 * approvedCourses: undefined
 * newCourse: "Nuevo curso"
 * this: ["addCourse", (newCourse)]
 */
// Object.entries(juan)[3][1]("Nuevo curso");

// -- Metodo para crear nuevas propiedades --
Object.defineProperty(juan, "navigator", {
  value: "Chrome",
  enumerable: false, // Cuando se itere con Object.keys, esta property no sera listada
  configurable: true,
  writable: true,
});
Object.defineProperty(juan, "editor", {
  value: "VSCode",
  writable: false, // No es editable, solo es borrable.
  enumerable: true,
  configurable: true,
});
Object.defineProperty(juan, "terminal", {
  value: "WSL",
  writable: true,
  enumerable: true,
  configurable: false, // Impide que se puedan borrar propiedades de nuestros objetos.
});

// Solo se puede visualizar por medio de getOwnPropertyDescriptors
Object.defineProperty(juan, "pruebaNasa", {
  value: "extraterrestre",
  writable: false,
  enumerable: false,
  configurable: false,
});

// Para la propiedad *configurable* a false en todos los objetos.
// No permite borrar propiedades del objeto.
// Object.seal(juan);

// No permite ni borrar o editar propiedades.
Object.freeze(juan);

// Proporciona los valores de las propiedades del objeto.
console.log(
  Object.getOwnPropertyDescriptors(juan),
  "getOwnPropertyDescriptors"
);
