import { clientServices } from "../service/cliente-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    
    if (id === null) {
        window.location.href = "../componentes/errorGeneral.html";
      }

    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");
    const perfil = await clientServices.detalleCLiente(id);
    nombre.value = perfil.nombre;
    email.value = perfil.email;
};


obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    
   
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    console.log(nombre," - ", email);

    clientServices.actualizarCliente(nombre, email, id)
        // .then(() => alert("edicion completada"))
        .then(() =>  {
            alert("Actualizacion completada");
            // //  console.log("alert")    
            window.location.replace("http://127.0.0.1:5500/src/componentes/listadoClientes.html");   
            console.log("rediccionar")    

    });
});