var express 		= require('express');
var router			= express.Router();	 
var careerConfig	= require("./config");	
var fs 				= require("fs");	

router.get('/',function(req, res){
	console.log('req received');
	res.send("req received");
	res.end();
})

router.post('/botHandler',function(req, res){
	//console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
	console.log('Dialogflow Request body: ' + JSON.stringify(req.body));	
	var contextParams ={
			qualification:req.body.result.contexts[0].parameters.qualification.toLowerCase(),
			infoType:req.body.result.contexts[0].parameters.infotype.toLowerCase()
	}	
	processRequest(contextParams)
	.then((resp)=>{	
		console.log(careerConfig.webview);
		res.json(careerConfig.webview).end();	
	})
	.catch((err)=>{
		res.json(err).end();
	});		
});


var processRequest = function(contextParams){
	return new Promise(function(resolve, reject){
		var html = careerConfig.html;		
		constructJson(careerConfig[contextParams.qualification][contextParams.infoType])
		.then(function(resp){				
			html = html.replace('configJson', "var careerConfig="+JSON.stringify(resp));
			console.log(html);
			fs.writeFile("public/index.html",html, function(err){
				if(err){
					console.log(err);
					reject(false);
				}else{
					resolve(true);
				}
			})			
		})
		.catch((err)=>{
			reject(err);
		})		
	})
}
var constructJson = function(infoObj){
	return new Promise(function(resolve, reject){		
		var careerConfig = {
				chart: {
					container: '#collapsable-example',
					animateOnInit: true,
					node: {
						collapsable: true
					},
					animation: {
						nodeAnimation: 'easeOutBounce',
						nodeSpeed: 700,
						connectorsAnimation: 'bounce',
						connectorsSpeed: 700
					}
				},
				nodeStructure: {
					text: {
						name: 'SSC',
						title: ''
					},
					children: [infoObj]
				}
			};
			
		resolve(careerConfig);	
	})
	
}
module.exports = router;



			