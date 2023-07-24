
import { productServices } from "../service/product-service";


const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();//ayuda a que no se recargue la pagina inmediatamente que seria el comportamiento normal del evento submit
  
  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const imagen = document.querySelector("[data-imagen]").value;
  
  productServices
    .crearProducto(nombre, precio, imagen)
    .then(() => alert('Producto Agregado'))
    .catch((err) => console.log(err));
   
});




