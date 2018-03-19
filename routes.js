var express 		= require('express');
var router			= express.Router();	 
var careerConfig	= require("./config");	

router.get('/',function(req, res){
	console.log('req received');
	res.send("req received");
	res.end();
})

router.post('/botHandler',function(req, res){
	//console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
	console.log('Dialogflow Request body: ' + JSON.stringify(req.body));	
	
	processRequest(req)
	.then((resp)=>{
		console.log(resp);
		res.json(resp).end();	
	})
	.catch((err)=>{
		res.json(err).end();
	});
	
	
});


var processRequest = function(){
	return new Promise(function(resolve, reject){
		
	})
}
module.exports = router;



			