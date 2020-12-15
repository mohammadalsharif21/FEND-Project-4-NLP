var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require('node-fetch')

// API Setup
const dotenv = require('dotenv')
const { response } = require('express')
dotenv.config()

const apikey = process.env.API_KEY

// Server Objects
var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

let apiEndpoint = {}

// Express
const app = express()

// Middleware
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/api/:formText', async (req, res)=>{
    const formText = req.params.formText
    console.log(formText)
    console.log(apikey)
    const apiValue = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apikey}&of=json&txt=${formText}&lang=en`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            "Content-Type": "application/json"
        },
        // body: JSON.stringify()
    })
    console.log(apiValue)
    const apiResponse = await apiValue.json()
    console.log(apiResponse)
    res.send(apiResponse)
})