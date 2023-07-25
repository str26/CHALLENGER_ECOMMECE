
import { productServices } from "../service/producto-service.js";


const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (event) => {
  console.log("hello")
  event.preventDefault();//ayuda a que no se recargue la pagina inmediatamente que seria el comportamiento normal del evento submit
  
  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const imagen = document.querySelector("[data-imagen]").value;
  
  productServices
    .crearProducto(nombre, precio, imagen)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
   
});




