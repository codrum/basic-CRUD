const mongoose = require('mongoose')

module.exports = (req, res, next) => {
	const EventModel = mongoose.model('Event')

	EventModel.find()
		.lean()
		.exec()
		.then((event) => {
			return res.status(200).json(event)
		})
		.catch(() => next({ status: 404, message: 'No events found' }))
}
