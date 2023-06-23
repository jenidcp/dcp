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


  
// Función para calcular el total de la compra
function calcularTotal() {
  var cantidad = parseInt(document.getElementById('cantidad').value);
  var precio = parseFloat(document.getElementById('precio').value);

  var descuento = 0;
  var total = 0;

  if (cantidad >= 2) {
      descuento = precio * 0.2;
      total = (precio * cantidad) - descuento;
  } else {
      total = precio * cantidad;
  }

  document.getElementById('resultado').textContent = 'Total a pagar: $' + total.toFixed(2);
  document.getElementById('resultado').classList.add('celeste');
}




