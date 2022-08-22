const event = require('express').Router()

const single = require('./single')
const create = require('./create')
const update = require('./update')
const remove = require('./delete')
const fetchAll = require('./fetchAll')

event.get('/', fetchAll)

event.get('/:id', single)

event.post('/', create)

event.put('/:id', update)

event.delete('/:id', remove)

module.exports = event
