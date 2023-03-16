function videoPlay(id) {
  const urlSecreta = `https://platziurlsecreta.com/${id}`;
  console.log("Se esta reproduciendo desde la url:", urlSecreta);
}

function videoStop(id) {
  const urlSecreta = `https://platziurlsecreta.com/${id}`;
  console.log("Se esta pausando la url:", urlSecreta);
}

export class PlatziClass {
  constructor({ name, videoID, description, comments = [] }) {
    this.name = name;
    this.videoID = videoID;
    this.description = description;
    this.comments = comments;
  }

  reproducir() {
    videoPlay(this.videoID);
  }

  pausar() {
    videoStop(this.videoID);
  }
}

// ------------------------------

const CourseClass = new PlatziClass({
  name: "Abstracción en JavaScript",
  videoID: "https://testvideo.com",
  description: "Curso de POO en JS",
});

/*
 * Metodos privados
 * Por convencion, los atributos y metodos que no se quiere que se llamen desde afuera
 * se les agrega _ de prefijo.
 */
class Course {
  constructor({ name, comments = [], teacher, classes = [] }) {
    this._name = name;
    this.teacher = teacher;
    this.classes = classes;
    this.comments = comments;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName === "Curso Malo de Programacion basica") {
      console.error("Han agregado un nombre no valido.");
      return;
    }
    this._name = newName;
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Basica.",
  teacher: "Freddy Vega",
});

cursoProgBasica.name;

// cursoProgBasica.name = "Curso Malo de Programacion basica";

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
