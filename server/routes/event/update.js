const mongoose = require('mongoose')

module.exports = (req, res, next) => {
	const EventModel = mongoose.model('Event')

	EventModel.findOne({ _id: req.params.id }, (err, event) => {
		if (err) return next({ status: 500, error: [err] })
		if (!event)
			return next({ status: 404, message: 'Event does not exist.' })

		event.title = req.body.title || event.title
		event.description = req.body.description || event.description
		event.costInDollars = req.body.costInDollars || event.costInDollars
		event.date = req.body.date || event.date
		event.save()

		return res.status(200).send(event)
	})
}
