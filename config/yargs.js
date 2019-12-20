"use strict";

const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripcion de la tarea"
};

const completado = {
  default: true,
  alias: "c",
  desc: "Marcar como completado/pendiente"
};

const argv = require("yargs")
  .command("crear", "Crear un elemento por hacer", {
    descripcion
  })
  .command("actualizar", "Actualiza el estado de una tarea", {
    descripcion,
    completado
  })
  .command("borrar", "Borra una tarea", {
    descripcion
  })
  .help().argv;

module.exports = {
  argv
};
