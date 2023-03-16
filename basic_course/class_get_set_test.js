export class Course {
  constructor({ name, classes = [] }) {
    this._name = this.getFormatCourseName(name);
    this.classes = classes;
  }

  getFormatCourseName(nuevoNombrecito) {
    if (
      typeof nuevoNombrecito !== "string" ||
      nuevoNombrecito?.trim()?.length <= 0
    ) {
      return this._name;
    }
    const validString = nuevoNombrecito?.trim() || "";
    const stringArray = validString.split(" ");
    for (var i = 0; i < stringArray.length; i++) {
      stringArray[i] =
        stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
    }
    const stringParsed = stringArray.join(" ");
    return stringParsed;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    this._name = this.getFormatCourseName(nuevoNombrecito);
  }
}
