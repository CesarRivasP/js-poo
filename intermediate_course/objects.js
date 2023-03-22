// -------- Shallow copy en JavaScript --------
const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
  editA: function () {
    this.a = "AAAAAAAAA";
  },
};

/*
 * Esta forma solo funciona para objetos que tienen una sola capa.
 * No recomendable para estos casos.
 */
const obj2 = {};
for (prop in obj1) {
  obj2[prop] = obj1[prop];
}

/*
 * Esta forma genera un comportamiento similar el for anterior, pero sin tener que iterar y demas
 * No recomendable para estos casos.
 */
const obj3 = Object.assign({}, obj1);

/*
 * Esta forma funciona bien cuando no hay objetos anidados en el objeto base.
 * Con este metodo, el objeto apunta al proto del objeto que se este copiando.
 * Por lo que las copias siempre afectan a los objetos que hayan heredado con Object.create.
 * No recomendable para estos casos.
 */
const obj4 = Object.create(obj1);

// --- JSON.parse y JSON.stringify ---
/*
 * JSON.stringify: Creamos un string con base a un objeto.
 * JSON.parse: Creamos un objeto con base a un String.
 * De esta forma, se copia un string que no se guarda en la memoria heap.
 * Si no que se guarda en la memoria stack, y a partir de alli se esta creando un nuevo Objeto.
 * Estos metodos no trabajan con funciones dentro de los objetos, por lo que solo omitiran esas funciones
 * En casos de que estan existan.
 */
const stringifiedComplexObj = JSON.stringify(obj1);
const parsedComplexObj = JSON.parse(stringifiedComplexObj);
