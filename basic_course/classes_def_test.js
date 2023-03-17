export class Comment {
  constructor({ content, studentName, studentRole = "estudiante" }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    const comentario = {
      studentName: this.studentName + " (" + this.studentRole + ")",
      likes: this.likes + " likes",
      content: this.content,
    };
    return comentario;
  }
}

export class Student {
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
    return comment.publicar();
  }
}

export class TeacherStudent extends Student {
  constructor({ skills = [] }) {
    this.skills = skills;
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: this.skills,
    });
    comment.publicar();
  }
}

const skills = ["js", "python", "mongodb"];
const props = {
  name: "Erik Ochoa",
  username: "elyager",
};

const profesor = new TeacherStudent(props, skills);
profesor.publicarComentario("Mi primer comentario");
