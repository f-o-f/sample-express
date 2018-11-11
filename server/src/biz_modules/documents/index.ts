import express = require("express");

const ruter = express.Router()

ruter.all(['*'], (req, res, next) => {
  next()
})

ruter.get('/', async (req, res, next) => {
  try {
    const service = require('./ap/get-list')
    const response = await service(req.body, req.query, req.params)
    res.status(201)
    res.send(response)
  } catch (err) {
    next(err)
  }
})

ruter.get('/:id', async (req, res, next) => {
  try {
    const service = require('./ap/get')
    const response = await service(req.body, req.query, req.params)
    res.status(201)
    res.send(response)
  } catch (err) {
    next(err)
  }
})

ruter.post('/', async (req, res, next) => {
  try {
    const service = require('./ap/create')
    const response = await service(req.body, req.query, req.params)
    res.status(201)
    res.send(response)
  } catch (err) {
    next(err)
  }
})

ruter.put('/:id', async (req, res, next) => {
  try {
    const service = require('./ap/update')
    const response = await service(req.body, req.query, req.params)
    res.status(200)
    res.send(response)
  } catch (err) {
    next(err)
  }
})

ruter.delete('/:id', async (req, res, next) => {
  try {
    const service = require('./ap/delete')
    const response = await service(req.body, req.query, req.params)
    res.status(204)
    res.send(response)
  } catch (err) {
    next(err)
  }
})

export = ruter