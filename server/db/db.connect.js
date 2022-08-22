const mongoose = require('mongoose')

const EventSchema = require('../models/event')

const db = require('./db.config')

mongoose.connect(
	`mongodb+srv://${db.user}:${db.pass}@${db.name}.dmkycfm.mongodb.net/?retryWrites=true&w=majority`
)

mongoose.connection.on('connected', () => {
	console.log('db connected')
	mongoose.model('Event', EventSchema)
})
