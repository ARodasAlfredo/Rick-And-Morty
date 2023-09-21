const http = require("http");
const data = require("./utils/data")

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    if(request.url.includes("/rickandmorty/character")){
        const id = request.url.split('/').at(-1);
        const character = data.find((char) => {
            return char.id === Number(id)
        })
        return response
        .writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify(character))
    }
}).listen(3001, "127.0.0.1")