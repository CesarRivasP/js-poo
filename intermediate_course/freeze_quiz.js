function deepFreeze(element) {
  if (typeof element !== "object") return element;
  Object.freeze(element);
  for (let key in element) {
    deepFreeze(element[key]);
  }
  return element;
}

const juan = {
  name: "Juanito",
  approvedCourses: ["Curso 1", "Curso 2"],
  caracteristicas: {
    age: 18,
    colorCabello: "Negro",
    gustos: {
      musica: ["rock", "punk", "ska"],
      peliculas: ["drama", "horros", "comedia"],
    },
  },
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  },
};

const result = deepFreeze(juan);

console.log(
  Object.getOwnPropertyDescriptors(result),
  "getOwnPropertyDescriptors"
);
