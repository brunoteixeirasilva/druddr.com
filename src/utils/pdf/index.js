var markdownpdf = require('markdown-pdf')
var remarkableClassy = require('remarkable-classy')
var location = './public/markdown/'
var fileName = 'bruno-resume'

var options = {
	cssPath: location + 'cv.css',
	remarkable: {
		html: true,
		breaks: true,
		plugins: [remarkableClassy]
	}
}

markdownpdf(options)
	.from(location + fileName + '.md')
	.to(location + fileName + '.pdf', function() {
		console.log('Converted file')
	})
