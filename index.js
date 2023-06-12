console.log("hola david");

// Obtener referencias a los elementos del formulario y a la lista de pedidos
var inputCapitulo = document.getElementById("inputCapitulo");
var btnAgregar = document.getElementById("btnAgregar");
var listaPedidos = document.getElementById("listaPedidos");

// Agregar evento click al botón
btnAgregar.addEventListener("click", function() {
  // Obtener el valor del capítulo ingresado
  var capitulo = inputCapitulo.value;

  // Crear un nuevo elemento de lista y asignarle el valor del capítulo
  var nuevoPedido = document.createElement("li");
  nuevoPedido.textContent = "Capítulo " + capitulo;

  // Agregar el nuevo elemento de lista a la lista de pedidos
  listaPedidos.appendChild(nuevoPedido);

  // Limpiar el valor del input de capítulo
  inputCapitulo.value = "";
});


  




