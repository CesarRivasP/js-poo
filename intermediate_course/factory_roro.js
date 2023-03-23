// --- Factory Pattern y RORO ---
function requiredParams(param) {
  throw new Error(`${param} es obligatorio`);
}

function isArray(subject) {
  return Array.isArray(subject);
}

function createLearningPath({ name = requiredParams("name"), courses = [] }) {
  const private = {
    _name: name,
    _courses: courses,
  };
  const public = {
    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length > 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
    get courses() {
      return private["_courses"];
    },
  };
  return public;
}

function createStudent({
  name = requiredParams("name"),
  email = requiredParams("email"),
  age,
  twitter,
  facebook,
  instagram,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  /*
   * - Namespaces en JS
   * Separar el alcance de las varaibles para su edición en el futuro
   * Se estan separando en publicas y privadas
   * Con este objectos se protege que no puedan editar nada de lo que se guarde en private.
   */
  const private = {
    _name: name,
    _learningPaths: learningPaths,
  };

  const public = {
    email,
    age,
    approvedCourses,
    twitter,
    facebook,
    instagram,
    // Primera forma de proteger nuestras funciones
    // readName: function () {
    //   return private["_name"];
    // },
    // changeName: function (newName) {
    //   private["_name"] = newName;
    // },
    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length > 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
    get learningPaths() {
      return private["_learningPaths"];
    },
    set learningPaths(newLP) {
      if (!newLP.name) {
        console.warn("Tu lp no tiene nombre");
        return;
      }
      if (!newLP.courses) {
        console.warn("Tu lp no tiene courses");
        return;
      }
      if (!isArray(newLP.courses)) {
        console.warn("Tu lp no es una lista de courses");
        return;
      }
      private["_learningPaths"].push(newLP);
    },
  };

  // Con esta definicion anulamos el polimorfismo, pero se protegen los metodos.
  // Object.defineProperty(public, "readName", {
  //   writable: false,
  //   configurable: false,
  // });
  // Object.defineProperty(public, "changeName", {
  //   writable: false,
  //   configurable: false,
  // });

  return public;
}

const andres = createStudent({
  name: "Andres",
  email: "andres@gmail.com",
  twitter: "ae101",
  instagram: "ae101",
  facebook: "ae101",
});

andres.learningPaths = "Nueva ruta de aprendisaje";
