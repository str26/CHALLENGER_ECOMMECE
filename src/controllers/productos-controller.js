import { productServices } from "../service/producto-service.js";

const crearNuevaLinea = (nombre, precio, imagen, id) => {

    const linea = document.createElement("div");
    const contenido =    ` 
                    
                <img class= "imagen__productos" src=${imagen} alt="">
                <div class="iconos__delete__update">

                <a id="${id}" data-delete><i class="fa-regular fa-trash-can"></i></a>
                <a href= "../componentes/editarProducto.html?id=${id}" data-actualizar><i class="fa-regular fa-pen-to-square"></i></a >
                
                <h5 class="producto__titulo">${nombre}</h5>
                <p class="producto__precio" >${precio}</p>
                <a href="#" class="productos__gridvideos__videos" id=${id}>Ver Producto</a>
                
            `;

    linea.innerHTML = contenido
    const btn = linea.querySelector("[data-delete]")
    btn.addEventListener("click", () =>{
        const id = btn.id
        productServices
            .eliminarProducto(id)
            .then(respuesta => {
                console.log(respuesta)
            })
            .catch((err) => alert("Ocurrió un error al eliminar el producto"));  
});
    
    return linea;
};

const table = document.querySelector("[data-table]");

productServices
    .listaProductos()
    .then((data) => {
        data.forEach(({ nombre, precio, imagen, id }) => {
            const nuevaLinea = crearNuevaLinea(nombre, precio, imagen, id);
            table.appendChild(nuevaLinea);
        });
      })
      .catch((err) => alert("Ocurrió un error"));

const eliminarCliente = (id) => {
    console.log
}
    