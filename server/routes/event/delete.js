const mongoose = require('mongoose')

module.exports = (req, res, next) => {
	const EventModel = mongoose.model('Event')

	EventModel.findOne({ _id: req.params.id }, (err, event) => {
		if (err) return next({ status: 500, error: [err] })
		if (!event)
			return next({ status: 404, message: 'Event does not exist.' })

		event.delete()

		const response = {
			success: true,
			message: 'Event successfully deleted',
		}

		return res.status(204).send(response)
	})
}
