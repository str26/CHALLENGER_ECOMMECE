import { productServices } from "../service/producto-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async() => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id === null) {
        alert("hubo un error, intenta de nuevo")
        //window.location.href = "../componentes/errorGeneral.html";
      }

    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio");
    const imagen = document.querySelector("[data-imagen]");
 

  try {
    const producto = await productServices.detalleProducto(id);
    if (producto.nombre && producto.precio && producto.imagen) {
        nombre.value = producto.nombre;
        precio.value = producto.precio;
        imagen.value = producto.imagen;
      } else {
        throw new Error();
      }
    } catch (error) {
        alert("hubo un error, intenta de nuevo")
      
    }
  };


obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");


    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    console.log(nombre, ", ", precio)

    productServices.actualizarProducto(nombre, precio, imagen, id)
        .then(() => alert("Actualizacion completada")

)});