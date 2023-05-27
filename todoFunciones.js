class Tarea {
    constructor(descripcion, prioridad, completado) {
      this.descripcion = descripcion;
      this.prioridad = prioridad;
      this.completado = completado;
    }
  }
  
  //Función crear tarea.
  function crearTarea(todoLista, descripcion, prioridad) {
    const tarea = new Tarea(descripcion, prioridad, false);
    todoLista.push(tarea);
    clasificarTarea(todoLista);
  }
  
  //Función editar tarea.
  function editarTarea(todoLista, indice, newDescripcion, newPrioridad) {
    const tarea = todoLista[indice];
    tarea.descripcion = newDescripcion;
    tarea.prioridad = newPrioridad;
    clasificarTarea(todoLista);
  }
  
  //Función completar tarea
  function completarTarea(todoLista, indice) {
    const tarea = todoLista[indice];
    tarea.completado = true;
  }
  
  //Función eliminar tarea
  function eliminarTarea(todoLista, indice) {
    todoLista.splice(indice, 1);
  }
  
  //Función buscar tarea.
  function buscarTarea(todoLista, keyword) {
    const buscarResultados = todoLista.filter((tarea) => {
      const descripcion = tarea.descripcion || '';
      return descripcion.toLowerCase().includes(keyword.toLowerCase());
    });
    return buscarResultados;
  }
  
  //Función asignar prioridad
  function asignarPrioridad(todoLista, indice, prioridad) {
    const tarea = todoLista[indice];
    tarea.prioridad = prioridad;
    clasificarTarea(todoLista);
  }
  
  //Función filtrar tarea.
  function filtarTarea(todoLista, prioridad) {
    const tareasFiltradas = todoLista.filter(
      (tarea) => tarea.prioridad === prioridad
    );
    return tareasFiltradas;
  }
  
  //Función clasificar tarea.
  function clasificarTarea(todoLista) {
    todoLista.sort((a, b) => b.prioridad - a.prioridad);
  }

  //Función para imprimir tarea
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