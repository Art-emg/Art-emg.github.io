
const request = require('request');
const url = 'http://img.ignio.com/r/export/utf/xml/daily/com.xml';
var answer = '';

request
({
   method: 'GET',
   url: url,
  }, 
  function (error, response, body) 
  {
	if (!error && response.statusCode == 200) 
	  {
		 console.log(body);
		answer = body;
	  }
  }
)

