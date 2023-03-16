class Classes {
  constructor({ name, video, description, comments = [] }) {
    this.name = name;
    this.video = video;
    this.description = description;
    this.comments = comments;
  }
}

const CourseClass = new Classes({
  name: "Abstracción en JavaScript",
  video: "https://testvideo.com",
  description: "Curso de POO en JS",
});

class Course {
  constructor({ name, comments = [], teacher, classes = [] }) {
    this.name = name;
    this.teacher = teacher;
    this.classes = classes;
    this.comments = comments;
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Basica.",
  teacher: "Freddy Vega",
});
const cursoDefHtmlCss = new Course({
  name: "Curso Definitivo de Html y CSS.",
  teacher: "Juan David Castro Gallego",
  classes: [CourseClass],
});
const cursoPractHtmlCss = new Course({
  name: "Curso Practico de Html y CSS.",
  teacher: "Juan David Castro Gallego",
  classes: [CourseClass],
});
const cursoDefUnrealEngine = new Course({
  name: "Curso Definitivo de Unreal Engine.",
});
const cursoPractUnrealEngine = new Course({
  name: "Curso Practico de Unreal Engine.",
});
const cursoDefSciencData = new Course({
  name: "Curso Definitivo de Science Data.",
});
const cursoPractSciencData = new Course({
  name: "Curso Practico de Science Data.",
});

class LearningPath {
  constructor({ name, courses = [] }) {
    this.id = Math.floor(Math.random() * 100);
    this.name = name;
    this.courses = courses;
  }

  addCourse(newCourse) {
    this.courses.push(newCourse);
  }

  removeCourse(id) {
    this.courses.filter((course) => course.id !== id);
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo web",
  courses: [cursoProgBasica, cursoDefHtmlCss, cursoPractHtmlCss],
});
const escuelaVideoJuegos = new LearningPath({
  name: "Escuela de Video Juegos",
  courses: [cursoProgBasica, cursoDefUnrealEngine, cursoPractUnrealEngine],
});
const escuelaDataScience = new LearningPath({
  name: "Escuela de Data Science",
  courses: [cursoProgBasica, cursoDefSciencData, cursoPractSciencData],
});

class Student3 {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student3({
  name: "Juan",
  username: "juandc",
  email: "juanemail@gmail.com",
  twitter: "juandc",
  learningPaths: [escuelaWeb, escuelaVideoJuegos],
});

const miguel2 = new Student3({
  name: "miguel",
  username: "migueldc",
  email: "miguelemail@gmail.com",
  instagram: "migueldc",
  learningPaths: [escuelaVideoJuegos],
});

const maria2 = new Student3({
  name: "maria",
  username: "mariadc",
  email: "mariaemail@gmail.com",
  instagram: "mariadc",
  learningPaths: [escuelaVideoJuegos, escuelaDataScience],
});
