'use strict'

const http = require('http')
const port = process.env.PORT || 8080

const server = http.createServer()

server.on('request',onRequest)
server.on('listening',onListening)


server.listen(port)

function onRequest(req, res){
	res.end("Hola io.js")
}

function onListening(){
	console.log("El servidor esta escuchando en el puerto: " + port)
}

