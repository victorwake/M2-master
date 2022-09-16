//Para manipular un elemento de html en con jquery debes usar $('#id-elemento') 
//agregandole como arguemnto el id del elemento que quieres manipular






























































// function limpiar(campo) {
//     if (campo === " contenedor") {
//       $("#amigo").empty();
//       $("#lista").empty();
//     } else if (campo === "input") {
//       $("#input").val("");
//       $("#inputDelete").val("");
//     }
//   }

//   function mostrarAmigos() {
//     $.ajax({
//       url: `http://localhost:5000/amigos`,
//       type: "get",
//       success: (info) => {
//         info.forEach((amigo) => $("#lista").append(`<li>${amigo.name}</li>`));
//       },
//     });
//   }

//   function buscarAmigo(id) {
//     $.ajax({
//       url: `http://localhost:5000/amigos/${id}`,
//       type: "get",
//       success: (info) => {
//         $("#amigo").append(`<li>${info.name}</li>`);
//         $("#amigo").append(`<li>${info.email}</li>`);
//         limpiar("input");
//         //mostrarAmigos();
//       },
//       error: (error) => {
//         if (error) {
//           alert("Id no valido");
//           limpiar("input");
//         }
//       },
//     });
//   }

//   function borrarAmigo(id) {
//     $.ajax({
//       url: `http://localhost:5000/amigos/${id}`,
//       type: "delete",
//       success: (info) => {
//         alert("Amigo eliminado con exito");
//         limpiar();
//         mostrarAmigos();
//       },
//     });
//   }

//   $("#boton").click(() => {
//     limpiar("contenedor"); //este comando limpia la lista
//     //  console.log("ok");
//     mostrarAmigos();
//   });

//   $("#search").click(() => {
//     let id = $("#input").val();
//     if (!id) return alert("Ingrese un id");
//     limpiar("contenedor");
//     buscarAmigo(id);
//   });

//   $("#delete").click(() => {
//     let id = $("#inputDelete").val();
//     if (!id) return alert("Ingrese un id");
//     borrarAmigo(id);
//   });

//   $("enviarForm").click(() => {
//     let nombre = $("#name").val();
//     let age = $("#age").val();
//     let email = $("#email").val();
//     if (!nombre || !age || !email)
//       return alert("Ingrese un nombre, edad y email");
//     $.ajax({
//       url: `http://localhost:5000/amigos`,
//       type: "post",
//       data: { name: nombre, age: age, email: email },
//       success: (info) => {
//         alert("Amigo agregado con exito");
//         limpiar("input");
//         mostrarAmigos();
//       },
//     });
//   });
