'use strict'

const http = require('http')
const port = process.env.PORT || 8080

const server = http.createServer(onRequest)
server.listen(port, onListening)

function onRequest(req, res){
	res.end("Hola io.js")
}

function onListening(){
	console.log("El servidor esta escuchando en el puerto: " + port)
}

