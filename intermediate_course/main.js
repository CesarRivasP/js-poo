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

// Proporciona los valores de las propiedades del objeto.
console.log(
  Object.getOwnPropertyDescriptors(juan),
  "getOwnPropertyDescriptors"
);

// Metodo para crear nuevas propiedades
console.log(
  Object.defineProperty(juan, "pruebaNasa", {
    value: "extraterrestre",
    writable: true,
    enumerable: true,
  }),
  "getOwnPropertyDescriptors"
);
