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

  if (isArray(learningPaths)) {
    this.learningPaths = [];
    for (learningPathIndex in learningPaths) {
      if (learningPaths[learningPathIndex] instanceof LearningPath) {
        this.learningPaths.push(learningPaths[learningPathIndex]);
      }
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
