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
	let contextParams;
	if(req.body.result.contexts.length>0){
		contextParams ={
			qualification:req.body.result.contexts[0].parameters.qualification.toLowerCase(),
			infoType:req.body.result.contexts[0].parameters.infotype.toLowerCase()
		}	
	}else{
		contextParams ={
			qualification:req.body.result.parameters.qualification.toLowerCase(),
			infoType:req.body.result.parameters.infotype.toLowerCase()
		}
	}
	var webview = {
      "speech": "",
      "messages": [
        {
          "type": 4,
          "platform": "facebook",
          "payload": {
            "facebook": {
              "attachment": {
                "type": "template",
                "payload": {
                  "template_type": "generic",
                  "text": "Click for Information",
				  "elements": [{
					"title":"Click below button to see details",
					"image_url": "",
					"subtitle": "Ur Career",					
					"default_action":{
					  "type":"web_url",
					  "https://limitless-lake-62312.herokuapp.com/getInfo/"+contextParams.qualification+"/"+contextParams.infoType
					}
					"buttons": [{
                      "type": "web_url",
                      "url": "https://limitless-lake-62312.herokuapp.com/getInfo/"+contextParams.qualification+"/"+contextParams.infoType,
                      "title": "info",
                      "webview_height_ratio": "tall",
                      "messenger_extensions": "true"
                    }]
				  }]                  
                }
              }
            }
          }
        },
        {
          "type": 0,
          "speech": ""
        }
      ]
    }
	console.log(JSON.stringify(webview));
	res.status(200);
	res.json(webview).end();	
});

router.get('/getInfo/:qualification/:infoType',function(req, res){	
	var	contextParams ={
		qualification:req.params.qualification,
		infoType:req.params.infoType
	}	
	processRequest(contextParams)
	.then((resp)=>{	
		console.log(resp);	
		res.end(resp);	
	})
	.catch((err)=>{
		res.json(err).end();
	});	
});
var processRequest = function(contextParams){
	return new Promise(function(resolve, reject){
		var html = careerConfig.html;		
		console.log(contextParams);
		constructJson(careerConfig[contextParams.qualification][contextParams.infoType])
		.then(function(resp){				
			html = html.replace('configJson', "var careerConfig="+JSON.stringify(resp));			
			resolve(html);		
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



			