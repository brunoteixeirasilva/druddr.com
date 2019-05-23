/**
 * Node.js/Express server starter for React /build folder
 *
 * @author brunoteixeirasilva
 * @version 1.0.0
 */
const express = require('express')
const path = require('path')
const app = express()

/**
 * Makes use of express-static built-in middleware
 * * Forcedly sets cache-control to true
 * * Sets max-age to a-day
 */
app.use(
	express.static(path.join(__dirname, 'build'), {
		cacheControl: true,
		maxAge: 60 * 60 * 24 //86400seconds (a day)
	})
)

//Any request will be driven to build/index.html
app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

//Sets-up the port based on NODE_ENV
const port =
	process.env.PORT || (undefined === process.env.NODE_ENV ? 3000 : 8080)

//Starts listening to requests on the given port
app.listen(port, function() {
	console.log('App is running & listening on port => :' + port)
	console.log('Current NODE_ENV => ' + process.env.NODE_ENV || 'development')
})
