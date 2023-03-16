// ----- Object Literal -----
const natalia = {
  // Instancia del prototype Object
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso Definitivo de HTML/CSS",
    "Curso Practico de HTML/CSS",
  ],
  // Aprobar un proximo curso
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
};

// natalia.aprobarCurso.push("Curso Responsive Design");

// ======= Prototype =======
function Student(name, age, courseList) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = courseList;
  // this.aprobarCurso = function (nuevoCurso) {
  //   this.cursosAprobados.push(nuevoCurso);
  // };
}

// Asi se escnoderia un metodo dentro del proto de las instancias de nuestro prototipo
Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
};

// Esto seria una instancia del prototipo student.
const juanita = new Student("Juana", 15, ["Curso de Programación Básica"]);
juanita.aprobarCurso("Curso de Unreal Engine");

// ======= Prototipos con la sintaxis de clases. =======
class Student2 {
  constructor({ name, age, courseList = [], email }) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = courseList;
    this.email = email;
  }

  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

const Miguel = new Student2({
  name: "Miguel",
  age: 17,
  email: "miguel@gmail.com",
});
// Miguel.aprobarCurso("Curso de Unreal Engine 2");

//  ======= Ventajas de la programación orientada a objetos =======
const juan1 = {
  name: "JuanDC",
  username: "juandc",
  points: 100,
  socialMedia: {
    twitter: "fjuandc",
    instagram: "fjuandc",
    facebook: undefined,
  },
  approvedCourser: [
    "Curso definitivo de html y css",
    "Curso practico de html y css",
  ],
  learningPaths: [
    {
      name: "Escuela de Desarrollo Web",
      courses: [
        "Curso Basico html y css",
        "Curso definitivo html y css",
        "Curso Practico html y css",
      ],
    },
    {
      name: "Escuela de Desarrollo de video juegos",
      courses: [
        "Curso Basico UNREAL",
        "Curso definitivo UNREAL",
        "Curso Practico UNREAL",
      ],
    },
  ],
};

const miguel = {
  name: "miguelDC",
  username: "migueldc",
  points: 100,
  socialMedia: {
    twitter: "fmigueldc",
    instagram: "fmigueldc",
    facebook: undefined,
  },
  approvedCourser: [
    "Curso definitivo de html y css",
    "Curso practico de html y css",
  ],
  learningPaths: [
    {
      name: "Escuela de Desarrollo Web",
      courses: [
        "Curso Basico html y css",
        "Curso definitivo html y css",
        "Curso Practico html y css",
      ],
    },
    {
      name: "Escuela de Desarrollo de video juegos",
      courses: [
        "Curso Basico UNREAL",
        "Curso definitivo UNREAL",
        "Curso Practico UNREAL",
      ],
    },
  ],
};
