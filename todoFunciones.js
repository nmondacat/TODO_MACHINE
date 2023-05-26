class Tarea {
    constructor(descripcion, prioridad, completado) {
      this.descripcion = descripcion;
      this.prioridad = prioridad;
      this.completado = completado;
    }
  }
  
  function crearTarea(todoLista, descripcion, prioridad) {
    const tarea = new Tarea(descripcion, prioridad, false);
    todoLista.push(tarea);
    clasificarTarea(todoLista);
  }
  
  function editarTarea(todoLista, index, newDescripcion, newPrioridad) {
    const tarea = todoLista[index];
    tarea.descripcion = newDescripcion;
    tarea.prioridad = newPrioridad;
    clasificarTarea(todoLista);
  }
  
  function completarTarea(todoLista, indice) {
    const tarea = todoLista[indice];
    tarea.completado = true;
  }
  
  function eliminarTarea(todoLista, indice) {
    todoLista.splice(indice, 1);
  }
  
  function buscarTarea(todoLista, keyword) {
    const buscarResultados = todoLista.filter((tarea) => {
      const descripcion = tarea.descripcion || '';
      return descripcion.toLowerCase().includes(keyword.toLowerCase());
    });
    return buscarResultados;
  }
  
  function asignarPrioridad(todoLista, indice, prioridad) {
    const tarea = todoLista[indice];
    tarea.prioridad = prioridad;
    clasificarTarea(todoLista);
  }
  
  function filtarTarea(todoLista, prioridad) {
    const tareasFiltradas = todoLista.filter(
      (tarea) => tarea.prioridad === prioridad
    );
    return tareasFiltradas;
  }
  
  function clasificarTarea(todoLista) {
    todoLista.sort((a, b) => b.prioridad - a.prioridad);
  }

  function imprimirTarea(todoList) {
    todoList.forEach((tarea, indice) => {
      console.log(
        `Tarea ${indice + 1}: ${tarea.descripcion}, Prioridad: ${tarea.prioridad}, Completada: ${tarea.completado}`
      );
    });
  }
  
  module.exports = {
    crearTarea,
    editarTarea,
    completarTarea,
    eliminarTarea,
    buscarTarea,
    asignarPrioridad,
    filtarTarea,
    imprimirTarea,
  };