class Comment {
  constructor({ content, studentName, studentRole = "estudiantes" }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    console.log(`${this.studentName} (${this.studentRole})`);
    console.log(`${this.likes} likes`);
    console.log(`${this.content} comentario`);
  }
}

function videoPlay(id) {
  const urlSecreta = `https://platziurlsecreta.com/${id}`;
  console.log("Se esta reproduciendo desde la url:", urlSecreta);
}

function videoStop(id) {
  const urlSecreta = `https://platziurlsecreta.com/${id}`;
  console.log("Se esta pausando la url:", urlSecreta);
}

class PlatziClass {
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
  constructor({
    name,
    comments = [],
    teacher,
    classes = [],
    isFree = false,
    lang = "spanish",
  }) {
    this._name = name;
    this.teacher = teacher;
    this.classes = classes;
    this.comments = comments;
    this.isFree = isFree;
    this.lang = lang;
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
  isFree: true,
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
  lang: "english",
});
const cursoDefUnrealEngine = new Course({
  name: "Curso Definitivo de Unreal Engine.",
});
const cursoPractUnrealEngine = new Course({
  name: "Curso Practico de Unreal Engine.",
  lang: "english",
});
const cursoDefSciencData = new Course({
  name: "Curso Definitivo de Science Data.",
});
const cursoPractSciencData = new Course({
  name: "Curso Practico de Science Data.",
  lang: "english",
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

// --------- Herencia en JavaScript -----------------
class Student {
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

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    comment.publicar();
  }
}

/*
 * super() permite llamar al constructor de la clase madre de la cual se extiende.
 */
class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approvedCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        `Lo sentimos, ${this.name} solo puedes tomar cursos que esten abiertos.`
      );
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approvedCourse(newCourse) {
    if (newCourse.lang !== "en") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        `Lo sentimos, ${this.name} solo puedes tomar cursos en ingles`
      );
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approvedCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }

  approvedCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }

  // Esta clase fue definida en la clase madre Student. Y aqui se sobre escribio.
  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "profesor",
    });
    comment.publicar();
  }
}

const juan = new FreeStudent({
  name: "Juan",
  username: "juandc",
  email: "juanemail@gmail.com",
  twitter: "juandc",
  learningPaths: [escuelaWeb, escuelaVideoJuegos],
});

const miguel = new BasicStudent({
  name: "miguel",
  username: "migueldc",
  email: "miguelemail@gmail.com",
  instagram: "migueldc",
  learningPaths: [escuelaVideoJuegos],
});

const maria = new ExpertStudent({
  name: "maria",
  username: "mariadc",
  email: "mariaemail@gmail.com",
  instagram: "mariadc",
  learningPaths: [escuelaVideoJuegos, escuelaDataScience],
});

const freddy = new TeacherStudent({
  name: "Freddy Vega",
  username: "freddier",
  email: "freddier@gmail.com",
  instagram: "freddier",
  learningPaths: [],
});
