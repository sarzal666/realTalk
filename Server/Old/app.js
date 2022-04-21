const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.SERVER_PORT

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

module.exports = app;