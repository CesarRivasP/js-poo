function SuperObject() {}

SuperObject.isObject = function (subject) {
  return typeof subject === "object";
};

SuperObject.isArray = function (subject) {
  return Array.isArray(subject);
};

SuperObject.deepCopy = function (subject) {
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
};

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

const escuelaWebDev = new LearningPath({
  name: "Escuela de desarrollo web",
});
const escuelaDataDev = new LearningPath({
  name: "Escuela de Data Science",
});

const pedro = new Student({
  name: "Pedro",
  email: "pedroe@gmail.com",
  learningPaths: [
    escuelaWebDev,
    escuelaDataDev,
    { name: "Escuela del impostor", courses: [] },
  ],
});
