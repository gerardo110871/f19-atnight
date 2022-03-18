const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '276885c8eb6d4ae5980c48de4f5bffcb',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

//serving files using middleware (express.static)
// app.use("/", express.static(path.join(__dirname, '../public')))

//serving files using endpoints(app.get)
app.get("/", function(req, res) {
    rollbar.log('We finally did it')
    res.sendFile(path.join(__dirname, '../public'))
})

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})