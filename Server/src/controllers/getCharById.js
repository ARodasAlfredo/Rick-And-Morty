const axios = require('axios')

const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {
    try {
        const {id} = req.params
        const {data} = await axios(`${URL}/${id}`)
        if (!data.name) throw new Error(`Faltan datos del personaje con ID: ${id}`);
            const character ={
                id: data.id,
                name: data.name,
                status: data.status,
                species: data.species,
                origin: data.origin,
                image: data.image,
                gender: data.gender
            }
            return res.json(character)      
    } catch (error) {
        return error.message.includes("ID") ? res.status(404).send(error.message) : res.status(500).send(error.response.data.error)
    }
}

module.exports = getCharById

// const axios = require('axios')

// const getCharById = (response, id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({data}) => {
//         const character = {
//             id: data.id,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin,
//             image: data.image,
//             status: data.status
//         }
//         return response
//         .writeHead(200, {"content-type": "application/json"})
//         .end(JSON.stringify(character))
//     })
//     .catch((error) => {
//         return response
//         .writeHead(500, {"content-type": "text/plain"})
//         .end(error.message)
//     })
// }

// module.exports = getCharById