const mongoose = require('mongoose')

const { Schema } = mongoose

const EventSchema = new Schema(
	{
		title: {
			type: String,
			required: [true, "can't be blank"],
		},
		description: {
			type: String,
			required: [true, "can't be blank"],
		},
		costInDollars: {
			type: Number,
			required: [true, "can't be blank"],
		},
		date: { type: Date, default: Date.now },
	},
	{ timestamps: true }
)

module.exports = EventSchema
