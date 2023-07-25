
import { clientServices } from "../service/cliente-service.js";

console.log(clientServices)

const crearNuevaLinea = (nombre, email, id) => {
    console.log(id)
    const linea = document.createElement("tr");
    const contenido = `
    <td class="tabla__nombre-p" data-td>${nombre}</td>
    <td class= "tabla__email-p">${email}</td>
    <td class="tabla__nuevoCliente-p ">
        <ul class="tabla_nuevoCliente-icons" >
            <li>
                <a href="/src/componentes/editarCliente.html?id=${id}">
                Editar </a><i class="fa-regular fa-trash-can"></i>
            </li>
            <li class="eliminar">
                <button class="boton" type="button" id="${id}">
                Eliminar <i class="fa-solid fa-user-pen"></i></button>
            </li>    
        </ul>
    </td>
     `;
    
     linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id
        clientServices
            .eliminarCliente(id)
            .then((respuesta) =>{
                console.log(respuesta)
        })  
            .catch((err) => alert("Ocurrio un error"));
     //console.log("el click", id)
    });  
    return linea;
};


const table = document.querySelector("[data-table]");

clientServices
    .listaClientes()
    .then((data) => {
        data.forEach(({ nombre, email, id }) => {
            const nuevaLinea = crearNuevaLinea(nombre, email, id);
            table.appendChild(nuevaLinea);
        });
      })
      .catch((err) => alert("Ocurrió un error"));

const eliminarCliente = (id) => {
    console.log("Elimina el id")
}