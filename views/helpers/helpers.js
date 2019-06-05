const request = require('request')

module.exports = {
	test: function(){console.log("hallo");},
	request: function(params){
		request(params, function(error, response, body){
			if (error) {
				console.log(response.statusCode);
			}else{
				let data = JSON.parse(body);
				return data
			}
		})
	}
}
