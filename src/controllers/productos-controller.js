import { productServices } from "../service/producto-service";

const crearNuevaLinea = (nombre, precio, imagen, id) => {

    const linea = document.createElement("div");
    const contenido =    ` 
            <div>
                <a href="#" class="productos__gridvideos__videos" id=${id}><img src=${imagen} alt="">
                <h5 class="producto__titulo">${nombre}</h5>
                <p class="producto__precio">${precio}</p>
                Ver Producto</a>
            </div>`;
    
     linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id
        productServices
            .eliminarProducto(id)
            .then((respuesta) =>{
                console.log(respuesta)
        })  
            .catch((err) => alert("Ocurrio un error"));
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
    console.log("Elimina el id")
}