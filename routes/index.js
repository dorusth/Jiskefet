const express = require('express');
const request = require('request')
const router = express.Router();
const helpers =  require('../views/helpers/helpers.js')

helpers.test()

router.get('/', (req, res, next) => {
	function callback(error, response, body) {
		if (error) {
			console.log(response.statusCode);
		}else{
			var data = JSON.parse(body);
			res.render('home', {
		        layout: 'default',
		        template: 'index',
				data: data.data.items
		    })
		}
	}
	request({
		url: 'http://localhost:3000/logs?pageSize=6',
		headers: {
			'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibG9jYWxUZXN0VG9rZW4iLCJpYXQiOjE1NTk1NjQ3ODAsImV4cCI6MTU5MTEwMDc4MH0.8j1NowO7zSRkRraUUiqaeVYsS9tAq7LVZOtLfQqbxc0'
		}
	}, callback);
})

module.exports = router;
