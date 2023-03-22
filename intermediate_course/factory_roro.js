// --- Factory Pattern y RORO ---
function requiredParams(param) {
  throw new Error(`${param} es obligatorio`);
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
  };

  const public = {
    email,
    age,
    approvedCourses,
    learningPaths,
    twitter,
    facebook,
    instagram,
    readName: function () {
      return private["_name"];
    },
    changeName: function (newName) {
      private["_name"] = newName;
    },
  };

  // Con esta definicion anulamos el polimorfismo, pero se protegen los metodos.
  Object.defineProperty(public, "readName", {
    writable: false,
    configurable: false,
  });
  Object.defineProperty(public, "changeName", {
    writable: false,
    configurable: false,
  });

  return public;
}

const andres = createStudent({
  name: "Andres",
  email: "andres@gmail.com",
  twitter: "ae101",
  instagram: "ae101",
  facebook: "ae101",
});

// ---- Module pattern y namespaces: propiedades privadas en JavaScript ----
