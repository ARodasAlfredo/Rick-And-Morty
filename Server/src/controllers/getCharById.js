const axios = require('axios')

const getCharById = (response, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) => {
        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        }
        return response
        .writeHead(200, {"content-type": "application/json"})
        .end(JSON.stringify(character))
    })
    .catch((error) => {
        return response
        .writeHead(500, {"content-type": "text/plain"})
        .end(error.message)
    })
}

module.exports = getCharById