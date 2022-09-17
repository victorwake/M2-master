//Para manipular un elemento de html en con jquery debes usar $('#id-elemento') 
//agregandole como arguemnto el id del elemento que quieres manipular

const createListItem = (response) => {
    response.forEach(element => {
      $(`<li>${element.name}</li>`).appendTo('#lista')
    })
  }

    function mostrarAmigos() {
    $.ajax({
      url: `http://localhost:5000/amigos`,
      type: "get",
      success: (info) => {
        info.forEach((amigo) => $("#lista").append(`<li>${amigo.name}</li>`));
      },
    });
    
  }

  $('#boton').click(() => {
    $('#angel').hide();
  });

  
  const searchElement = (response) => {
    $('#amigo').text(response.name)
  }
  
  $('#boton').click(() => {
    $('#lista').empty()
    $.get('http://localhost:5000/amigos', createListItem)
  })
  
  $('#search').click(() => {

    const id = $('#input')[0].value
    limpiar("input")
    if(id < 7) {
    $.get(`http://localhost:5000/amigos/${id}`, searchElement)
    } else {
      alert('El id no existe')
    }
  })
  

  $('#delete').click(() => {
    const id = $('#inputDelete')[0].value
    $.ajax({
      url: `http://localhost:5000/amigos/${id}`,
      type: 'DELETE',
      success: (response) => {
        $('#lista').empty()
        alert('AMIGO ELIMINADO')
        createListItem(response)
      }
    })
  })



////////////////////////////////////////////////////////////////////////


function limpiar(campo) {
    if (campo === " contenedor") {
      $("#amigo").empty();
      $("#lista").empty();
    } else if (campo === "input") {
      $("#input").val("");
      $("#inputDelete").val("");
    }
  }

