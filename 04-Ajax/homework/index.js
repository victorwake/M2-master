//Para manipular un elemento de html en con jquery debes usar $('#id-elemento') 
//agregandole como arguemnto el id del elemento que quieres manipular

function limpiar(campo) {
  if (campo === "contenedor") {
    $("#amigo").empty();
    $("#lista").empty();
  } else if (campo === "input") {
    $("#input").val("");
    $("#inputDelete").val("");
  }
}

const amigosLista = function (){
  let lista = $("#lista");
  lista.empty();
  $.get('http://localhost:5000/amigos', response => {
    for(let i = 0; i < response.length; i++) {
      let cross = `<button onclick="deleteFriends(${response[i].id})">X</button>`;
      $('#lista').append(`<li>${"id: " + response[i].id + " " + response[i].name + " " + cross}</li>`)
    }
  })
}

$('#boton').click(() => {
  amigosLista();
})   //funcion para mostrar la lista de amigos

$('#boton').click(() => {
$('#imagenLoadin').hide();
}); //Limpia la imagen de carga


////////////////////////////////////////////////////////////////////////////////////////
// Buscar un amigo por id
$('#search').click(() => {
  // cont = itemLength();
  // console.log(cont);
  const id = $('#input')[0].value
  limpiar("input")
  if(id < 7) {
  $.get(`http://localhost:5000/amigos/${id}`, response => {
    $('#amigo').text(response.name);
    });
  }else{
    alert("Indice invalido")
  }
});
  
////////////////////////////////////////////////////////////////////////////////////////
//Eliminar un amigo por id
const deleteFriends = function(idFriend){
  $.ajax({
    url: `http://localhost:5000/amigos/${idFriend}`,
      type: 'DELETE',
      success:() =>{
        $('#success').text('Eliminado con exito');
        amigosLista();
      }
    })
}

$('#delete').click(() => {
  let id = $('#inputDelete').val();
  deleteFriends(id);
});  




