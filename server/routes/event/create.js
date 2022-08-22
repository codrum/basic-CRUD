const mongoose = require('mongoose')

module.exports = (req, res, next) => {
	const EventSchema = mongoose.model('Event')

	const Event = new EventSchema({
		title: req.body.title,
		description: req.body.description,
		costInDollars: req.body.costInDollars,
		date: req.body.date,
	})

	Event.save((err) => {
		if (err) {
			return next({ status: 400, error: [err] })
		}

		return res.status(201).json(Event)
	})
}
