'use strict'

const path = require('path')
const course = require('course')
const st = require('st')
const jsonBody = require('body/json')
const helper = require('../helper')

const router = course()
const mount = st({
	path: path.join(__dirname, '..', 'public'),
	index: 'index.html',
	passthrought: true
})


function onRequest (req, res){

	if (req.url.startsWith('/socket.io')) return

	mount(req, res, function (err){
		if (err) return res.end(err.message)

		router(req, res, function(err){
			if (err) return fail(err, res)

			res.statusCode = 404
			res.end(`404 not found: ${uri}`)
		})
	})
}

function fail(err, res){
	res.statusCode = 500
	res.setHeader('Content-type', 'text/plain')
	res.end(err.message)
}

module.exports = onRequest