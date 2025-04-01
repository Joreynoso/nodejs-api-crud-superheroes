// Función confirmDelete para mostrar el alert
function confirmDelete() {
    // Mostrar un mensaje de confirmación
    const confirmation = confirm("¿Estás seguro de que quieres eliminar este héroe?");
    
    // Si el usuario acepta, el formulario se enviará
    if (confirmation) {
      return true;
    } else {
      return false; // Si el usuario cancela, no se envía el formulario
    }
  }