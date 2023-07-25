
// ---- LISTA DE PRODUCTOS

const listaProductos = () => 
fetch("http://localhost:3000/productos").then(respuesta => respuesta.json());



//--- CREAR PRODUCTO
const crearProducto = (nombre, precio, imagen) => {
   return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },

        body: JSON.stringify({nombre, precio, imagen, id: uuid.v4() }),
    });
};


//--- ELIMINAR PRODUCTOS

const eliminarProducto = (id) => {
    console.log("Eliminar --> ", id)
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE",
    })
}

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then(respuesta => respuesta.json())
}


//-----ACTIUALIZAR PRODUCTOS

const actualizarProducto = (nombre, precio, imagen, id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, precio, imagen }),
    })
      .then((respuesta) => respuesta)
      .catch((err) => err);
  };


  //-- EXPORTAR SERVICIOS

export const productServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
  };





//******************************************************//

//---- PROMESA PROMESA SINTAXIS corta ----

// const listaClientes = () => {
//     return fetch("http://localhost:3000/perfil").then(respuesta => {
//         return respuesta.json()
//     });
// };



//---- PROMESA PROMESA SINTAXIS LARGA ----

// const promesa = new Promise((resolve, reject) => {
//     const http = new XMLHttpRequest();

//     //Abrir http (metodo, url)  metodo(post, get, update, delete)    
//     http.open("GET", "http://localhost:3000/perfil");

//     http.send();

//     http.onload = () => {
//         const response = JSON.parse(http.response);
//         if (http.status >= 400 ) {
//         reject(response);  
//         } else {
//             resolve(response);
//         }
//     };
// }); 
// return promesa;