require('dotenv').config()
require('./db/db.connect')
const express = require('express')
const routes = require('./routes')
const app = express()

const port = process.env.PORT || 8080 // set our port

app.use((req, res, next) => {
	res.append('Access-Control-Allow-Origin', ['*'])
	res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
	res.append('Access-Control-Allow-Headers', 'Content-Type')
	next()
})

app.use('/', routes)

app.use((err, req, res, next) => {
	res.status(err.status || 400).json({
		success: false,
		message: err.message || 'An error occured.',
		errors: err.error || [],
	})
})

app.use((req, res) => {
	res.status(404).json({ success: false, message: 'Resource not found.' })
})

// Start the server
app.listen(port)

console.log(`Server started on port ${port}`)
