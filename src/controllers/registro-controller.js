
import { clientServices } from "../service/cliente-service.js";


const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();//ayuda a que no se recargue la pagina inmediatamente que seria el comportamiento normal del evento submit
  
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  const password = document.querySelector("[data-password]").value;
  
    clientServices
    .crearCliente(nombre, email, password)
    .then(() => alert('Registro Completado!, puedes Iniciar Sesion'))
    .catch((err) => console.log(err));
   
});




