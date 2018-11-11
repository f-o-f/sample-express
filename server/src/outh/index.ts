import express = require("express");
const ruter = express.Router()

ruter.post('/login', async (req, res, next) => {
  try {
    res.status(200)
    res.send({ test: 123 })
  } catch (err) {
    next(err)
  }
})

export = ruter