const express = require('express')
const { createReadStream } = require('fs') 
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.listen(80)

app.get('/api/date', (req,res) => {
	res.send({date:Date.now()})
})
app.get('/api/datecors', (req,res) => {
	res.set('Access-Control-Allow-Origin', '*')
	res.send({data:Date.now()})
})
app.get('/api/jsonpdate', (req,res) => {
	var data = {date:Date.now()}
	res.type('application/json')
	res.jsonp(data)
	//var cbName = req.query.callback
	//res.send(cbName+'(' + JSON.stringify(data) +')')
})
