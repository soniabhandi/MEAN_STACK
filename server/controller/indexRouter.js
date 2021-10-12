var express= require('express')
var router=express.Router()
var indexModel = require('../models/indexModel')
var jwt = require('jsonwebtoken');
var generate_random_key=require('./randomStringAPI')

router.get('/',(req,res,next)=>{
	res.send('<h1>web server invoked</h1>')
})

router.post('/usersignup',(req,res,next)=>{
	collection_name="register"
	indexModel.usersignup(collection_name,req.body).then((result)=>{
		console.log(result)
		res.json({'response':'success'})
	}).catch((err)=>{
		res.json({'response':'failed'})
	})
	
})

router.post('/userlogin',(req,res,next)=>{
	var collection_name="register"
	indexModel.userlogin(collection_name,req.body).then((result)=>{
		//console.log(result)
		var flag
		if(result.length==0)
		{
			flag=0
			res.json({response:flag})
		}
		else {
			flag=1
			//for user authentication jwt send token
			var payload = {subject:result[0]._id}
			//jwr will generate authentication token 
			//jwt is module ,sign()is methon in jwt sign have 2 parameter (1. unique details of user 2. token (random key))
			var token = jwt.sign(payload,generate_random_key(50))
			res.json({response:flag,token:token,user:result[0]})
		}
	}).catch((err)=>{
		console.log(err)
	})
})	

//Contact Us page
router.post('/contactus',(req,res,next)=>{
		collection_name="contactus"
		indexModel.contactus(collection_name,req.body).then((result)=>{
			console.log(result)
			res.json({'response':'Message sent successfully, Thank You...'})
		}).catch((err)=>{
			res.json({'response':'Message not send'})
		})
		
})


module.exports=router