// --- Instance Of ---
function requiredParams(param) {
  throw new Error(`${param} es obligatorio`);
}

function isArray(subject) {
  return Array.isArray(subject);
}

function LearningPath({ name = requiredParams("name"), courses = [] }) {
  this.name = name;
  this.courses = courses;
}

function Student({
  name = requiredParams("name"),
  email = requiredParams("email"),
  age,
  twitter,
  facebook,
  instagram,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.socialMedia = {
    twitter,
    facebook,
    instagram,
  };
  this.approvedCourses = approvedCourses;

  const private = {
    _learningPaths: [],
  };

  // Aplicando los namespaces
  Object.defineProperty(this, "learningPaths", {
    get: function () {
      return private["_learningPaths"];
    },
    set: function (newLp) {
      if (newLp instanceof LearningPath) {
        private["_learningPaths"].push(newLp);
      } else {
        console.warn(
          "No puedes agregar ese Learning Path, porque no es Instancia del Prototype"
        );
      }
    },
  });

  if (isArray(learningPaths)) {
    for (learningPathIndex in learningPaths) {
      // Esta instruccion llama al seter
      this.learningPaths = learningPaths[learningPathIndex];
    }
  }
}

const escuelaDevWeb = new LearningPath({
  name: "Escuela de desarrollo web",
});
const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
});

const maria = new Student({
  name: "Maria",
  email: "marij@gmail.com",
  learningPaths: [
    escuelaDevWeb,
    escuelaData,
    { name: "Escuela del impostor", courses: [] },
  ],
});
