var Parse = {
  server: `http://localhost:3000/pokedex`,

  get: function (successCB) {
    $.ajax({
      method: "GET",
      url: Parse.server,
      contentType: 'application/json',
      success: successCB
    })
  },

  put: function (id, name, successCB) {
    const data = JSON.stringify({ name: name })
    $.ajax({
      method: "PUT",
      url: `http://localhost:3000/pokedex/${id}`,
      data: data,
      contentType: 'application/json',
      success: successCB
    })
  },

  delete: function (id, successCB) {
    $.ajax({
      method: "DELETE",
      url: `http://localhost:3000/pokedex/${id}`,
      contentType: 'application/json',
      success: successCB
    })
  },

  postPokemon: function (name) {
    const data = JSON.stringify({ name: name})
    $.ajax({
      method: "POST",
      url: `http://localhost:3000/pokedex/pokemon`,
      data: data,
      contentType: 'application/json'
    })
  },
  postType: function (type) {
    const data = JSON.stringify({ type: type})
    $.ajax({
      method: "POST",
      url: `http://localhost:3000/pokedex/types`,
      data: data,
      contentType: 'application/json'
    })
  },
  postImage: function (img) {
    const data = JSON.stringify({ img: img })
    $.ajax({
      method: "POST",
      url: `http://localhost:3000/pokedex/images`,
      data: data,
      contentType: 'application/json'
    })
  }

}

export default Parse