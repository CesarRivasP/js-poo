class Banda {
  constructor({ nombre, generos = [] }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }
  agregarIntegrante(integranteNuevo) {
    const instrumentFilter = "Bateria";
    if (integranteNuevo.instrumento === instrumentFilter) {
      const findInstruments = this.integrantes.find(
        (integrante) => integrante.instrumento === instrumentFilter
      );
      if (!findInstruments) {
        this.integrantes.push(integranteNuevo);
      }
      return;
    }
    this.integrantes.push(integranteNuevo);
  }
}

//Crear clase Integrante
class Integrante {
  // Tu código aquí 👈
  constructor({ nombre, instrumento }) {
    this.nombre = nombre;
    this.instrumento = instrumento;
  }
}

export { Banda, Integrante };

const data = {
  nombre: "Los Jacks",
  generos: ["rock", "pop", "post-punk"],
  integrantes: [],
};
const banda = new Banda(data);
banda.agregarIntegrante(
  new Integrante({ nombre: "Erik", instrumento: "Guitarra" })
);
banda.agregarIntegrante(
  new Integrante({ nombre: "Paul", instrumento: "Bateria" })
);
banda.agregarIntegrante(
  new Integrante({ nombre: "Pasul", instrumento: "Bateria" })
);
banda.agregarIntegrante(
  new Integrante({ nombre: "Paulss", instrumento: "Bateria" })
);
