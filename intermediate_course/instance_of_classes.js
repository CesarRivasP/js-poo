class Student {
  constructor({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
  }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };

    const privado = {
      _learningPaths: [],
    };

    Object.defineProperty(this, "learningPaths", {
      get() {
        return privado["_learningPaths"];
      },
      set(newLp) {
        if (newLp instanceof LearningPath) {
          privado["_learningPaths"].push(newLp);
        } else {
          console.warn(
            "Alguno de los LPs no es una instancia del prototipo LearningPath"
          );
        }
      },
    });
  }
}
