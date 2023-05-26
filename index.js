const { crearTarea, editarTarea, completarTarea, eliminarTarea, buscarTarea, asignarPrioridad, filtarTarea, imprimirTarea } = require('./todoFunciones');

// Lista vacía de tareas.
const todoLista = [];

// Ejemplos de uso de las funciones
crearTarea(todoLista, "Hacer ejercicio", 3);
crearTarea(todoLista, "Comprar comida", 2);
crearTarea(todoLista, "Estudiar para el examen", 1);

imprimirTarea(todoLista);

editarTarea(todoLista, 1, "Comprar frutas", 1);

completarTarea(todoLista, 0);

eliminarTarea(todoLista, 2);

const buscarResultados = buscarTarea(todoLista, "ejercicio");
console.log("Resultados de búsqueda:");
buscarResultados.forEach((tarea, indice) => {
  console.log(`Tarea ${indice + 1}: ${tarea.descripcion}, Prioridad: ${tarea.prioridad}, Completada: ${tarea.completado}`);
});

const tareasPrioridadAlta = filtarTarea(todoLista, 3);
console.log("Tareas con prioridad alta:");
tareasPrioridadAlta.forEach((tarea, indice) => {
  console.log(`Tarea ${indice + 1}: ${tarea.descripcion}, Prioridad: ${tarea.prioridad}, Completada: ${tarea.completado}`);
});

