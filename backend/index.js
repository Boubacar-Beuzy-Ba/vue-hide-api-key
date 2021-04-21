require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
var qs = require('qs')

const axios = require('axios')

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = process.env.API_KEY

app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    let query = req.query
    query.appid = apiKey
    let queryString = qs.stringify(query)
    axios(`${ apiUrl }?${ queryString }`).then(response => {
        res.send(response.data);
    })
});

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
});