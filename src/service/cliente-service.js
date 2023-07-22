
//-----PROMESA UNA SOLA LINEA ----- //

const listaClientes = () => 
fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json());


const crearCliente = (nombre, email) => {
   return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },

        body: JSON.stringify({nombre, email, id: uuid.v4()}),
    });
};

const eliminarCliente = (id) => {
    console.log("Eliminar --> ", id)
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE",
    })
}

const detalleCLiente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then(respuesta => respuesta.json())
}


const actualizarCliente = (nombre, email, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, email }),
    })
      .then((respuesta) => respuesta)
      .catch((err) => console.log(err));
  };

export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCLiente,
    actualizarCliente,
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