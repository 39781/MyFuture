module.exports = {
	"input":{
		"intermediate":['mpc','bipc','ece','hec'],
		"graduation":['MSCs','MCs','BA','BBA','BCA','BCOM','BTech'],
		"postGraduation":['MSc','MCom','MBA','MCA','MTech'],
		"inputResJson":{			
			"speech": "",
			"contextOut": [{
				 "name":"", 
				 "lifespan":2, 
				 "parameters":{}
			}],			
			"messages": [{
				  "type": 2,
				  "platform": "facebook",
				  "title": "Please select your ",
				  "replies": []
			},
			{
			  "type": 0,
			  "speech": ""
			}
			]
		}
	},
	"ssc":{
		"jobs":{                    
			collapsed: true,
			text: {
				name: "Jobs",
				title: ""								
			},
			children: [
				{
					text: {
						name: "NAVY",
						title: "Indian Navy"								
					},
					children: [
						{
							text: {
								name: "DYA",
								title: "Dock Yard Apprentices"								
							}                            
						},
						{
							text:{
								name: "Sailors",
								title: "sailors",
							}                            
						},
						{
							text:{
								name: "AA",
								title: "Artificer Apprentices",
							}										
						}
					]									
				},
				{
					text:{
						name: "ARMY",
						title: "Indian Army"								
					},
					children: [
						{
							text: {
								name: "IASC",
								title: "Indian Army Soldier Clerks Examination"								
							}                            
						},
						{
							text:{
								name: "N.E.R.",
								title: "Indian Army Soldier General Duty"								
							}                            
						},
						{
							text:{
								name: "M.E.R.",
								title: "Indian Army Soldier Technical"								
							}                            
						},
						{
							text:{
								name: "M.E.R.",
								title: "Indian Army Soldier Nursing Assistants"								
							}                            
						}
						
					]									
				},
				{
					text:{
						name: "Police Force",
						title: "Indian Police"								
					},
					children: [
						{
							text: {
								name: "CRPF",
								title: "Central Reserve Police Force"								
							}                            
						},																				
					]									
				},
				{
					text:{
						name: "SSC",
						title: "Staff Selection Commission"								
					},
					children: [
						{
							text: {
								name: "Clerks",
								title: ""								
							}                            
						},																				
					]									
				}
			]                            
                        
        },
		"further studies":{                                        			
			text: {
				name: "Further Studies",
				title: ""								
			},
			children: [
				{
					text: {
						name: "Intermediate",
						title: ""								
					}                            
				},
				{
					text:{
						name: "Diploma",
						title: ""								
					}                            
				},
				{
					text:{
						name: "ITI",
						title: ""								
					}                            
				}
			]		                        
		}
	},	
	"intermediate":{
		"Engineering":{
			"Description":"This is a professional course. Engineering means to find economical solution for technological problems and it has a vital role in the prevailing milieu. It is a vast field that offers infinite specialisation. This courses are 4 years duration",
			"courses":["civil Engineering", "Mechanical Engineering", "Electrical engineering","Aeronautical engineering", "Ceramic engineering", "Chemical engineering", "Computer engineering", "Automobile engineering", "Industrial engineering", "Environmental engineering", "Marine engineering", "Textile engineering"]
		},
		"Medicine":{
			"Description":"Medicine is one of the most sort out and rewarding career for those interested in Science and dealing with sick people.A doctor's profession involves a lot of hard work and at the same time, it gives the satisfaction of curing patients at times even saving lives. It is a very demanding profession.",
			"courses":["General Physicians with MBBS", "Specialization Medicines like General Medicine, General Surgery, Paediatrics, Obstetrics & Gynaecology, Dermatology, Ophthalmology, Orthopedics, ENT (Ear, Nose and Throat), Psychiatry, Anesthesiology","Super Specialisations like  Plastic Surgery, Neurosurgery, Cardio-thoracic surgery, Conito-urinary surgery, Paediatric Surgery, Gastroenterology, Endocrinology and Clinical Haematology"]
		},
		"Pharmacy":{
			"Description":"Pharmacy or Pharmacology is one of the main disciplines under Biomedical Science and the pharmaceutical industry. There are many disciplines within the Biomedical sciences. There are over 225 programs in Pharmacy conducted by different universities in India. The main courses in Pharmacy are",
			"courses":["2 years Diploma in Pharmacy (D.Pharm)", "4 years Bachelor of Pharmacy (B.Pharm)"]
		},
		"Law":{
			"Description":"Legal profession is one of the growing and lucrative professions all over the world. It is one of the most adventurous as well as exciting career. Lawyers are held in high esteem in our society, and there remains the faith that when all else fails, one can still take recourse to the legal system.",
			"courses":["corporation law", "civil law", "criminal law", "international law", "labour law", "patent law", "tax law"]
		},
		"Agriculture":{
			"Description":"Agriculture is the production of food and other goods by systematic and controlled growing of plants and living organisms. Agriculture industry plays a major role in the Indian economic scenario contributing around 20 percent of Gross Domestic product (GDP)",
			"courses":["food science", "plant science", "soil science", "animal science"]
		},
		"Business Administration":{
			"Description":"Business administration is one of the most sought after careers and it is all about managing business functions such as finance, management, services etc. It can be defined as the process of managing and supervising the business and related operations of a company or organisation.",
			"courses":["BBA","BBM"]
		},
		"Teaching":{
			"Description":"Teaching is another option for +2 students. To become a nursery or primary teacher, one can go for Nursery Teachers Training or Certificate and Diploma courses in teaching, after your 10+2 stream",
			"courses":["D.ED"]
		},
		"Commerce":{
			"Description":"Students who have taken up commerce stream in intermediate, have a good future in banking and financial institutions. There are various subjects studied under commerce stream some being theoretical like Business Law and others being practical like Financial accounting, Business finance, Auditing, Taxation etc",
			"courses":["Diploma Programs Travel & Tourism, Hotel Management, Air Hostess & Flight Steward"," Degree programs B.Com,B.Com (Honors),BBA,BBM,BBA- LLB,BA - LLB,BCA,B.Com (Computer),BA","Professional Programs - CS, CA, ICWA, CFA"]
		},
		"Arts":{
			"Description":"For intermediate arts students, Variety of creative courses are awaiting Arts/ Humanities students after their 12th grade.",
			"courses":["Diploma Programs Foreign Language,Travel & Tourism,Hotel Management,Air Hostess & Flight Steward,Interior Designing,Event Management"," Degree programs B.A (Bachelor of Arts),BBA,BBM,Bachelor of Library Science,Bachelor of Social Work,Bachelor of Journalism,BFA (Bachelor of Fine Arts),LLB (Bachelor of Law),BBA- LLB,B.Des","Professional Programs - CS, CA, ICWA"]
		},
		"Science":{
			"Description":"For intermediate science students, Hundreds of career options are available for 10+2 science students. The major advantage of +2 science students is that they can switch to other careers i.e arts, humanities or even to commerce",
			"courses":["These students eligible for all courses discussed above"]
		}		
	},
	"degree":{
	},
	"pg":{
	},
	html:"<html><head><meta charset='utf-8'><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><meta name='viewport' content='width=device-width'><title> infoTitle </title><link rel='stylesheet' href='https://limitless-lake-62312.herokuapp.com/Treant.css'><link rel='stylesheet' href='https://limitless-lake-62312.herokuapp.com/collapsable/collapsable.css'><link rel='stylesheet' href='https://limitless-lake-62312.herokuapp.com/vendor/perfect-scrollbar/perfect-scrollbar.css'></head><body><center>Click on contentType</center><div class='chart' id='collapsable-example'></div><script src='https://limitless-lake-62312.herokuapp.com/vendor/raphael.js'></script><script src='https://limitless-lake-62312.herokuapp.com/Treant.js'></script><script src='https://limitless-lake-62312.herokuapp.com/vendor/jquery.min.js'></script><script src='https://limitless-lake-62312.herokuapp.com/vendor/jquery.easing.js'></script><script>configJson;tree = new Treant(careerConfig);</script><script>var xhr = new XMLHttpRequest();xhr.onreadystatechange = function() {console.log(this.readyState, this.status);if (this.readyState == 4 && this.status == 200) {console.log(this.responseText);}else{console.log(this.responseText);}};xhr.open('GET', 'https://limitless-lake-62312.herokuapp.com/shareMessageToBot/recipientId',true);xhr.send();</script></body></html>",	
}

