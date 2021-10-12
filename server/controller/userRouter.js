var express = require('express')
var router = express.Router()
var userModel = require('../models/userModel')

router.get('/',(req,res,next)=>{
    res.send('its working , user router invoked')
})

//To change password
router.post('/cpuser',(req,res,next)=>{
    //console.log(req.body)
    var collection_name="register"
    userModel.cpuser(collection_name,req.body).then((result)=>{
        if(result.length==0)
			res.json({'response':0})
		else
		{
			if(req.body.npass==req.body.cnpass)
			{
				//res.json({'response':'change password'})
                userModel.upuser(collection_name,req.body).then((result)=>{
                    res.json({'response':2})
                }).catch((err)=>{
                    console.log(err)
                })
			}
            else
			    res.json({'response':1})
		}
    }).catch((err)=>{
        console.log(err)
    })
})

//To edit profile : epfetch to fetch data from db
router.post('/epfetch',(req,res,next)=>{
	collection_name='register'
	userModel.epfetch(collection_name,req.body).then((result)=>{
		res.json(result[0])
	}).catch((err)=>{
		console.log(err)
	})
})

//To update profile 
router.post('/upuser',(req,res,next)=>{
	collection_name='register'
	userModel.upuser2(collection_name,req.body).then((result)=>{
		res.json(result)
	}).catch((err)=>{
		console.log(err)
	})
})

//To add product on product page :fetch data from db
router.get('/fetchProdDetails',(req,res,next)=>{
    collection_name="product"
    userModel.fetchProdDetails(collection_name).then((result)=>{
		//console.log(result)
        res.json(result)        
    }).catch((err)=>{
        res.json({'response':'Product not added'})  
    })  
})

router.post('/payment',(req,res,next)=>{
    var collection_name='payment'
    userModel.payment(collection_name,req.body).then((result)=>{
        res.json({'response':1})
    }).catch((err)=>{
        console.log(err)
    })
})

router.get('/fetchDetails',(req,res,next)=>{
    collection_name="payment"
    userModel.fetchProdDetails(collection_name,req.body).then((result)=>{
		//console.log(result)
        res.json(result)        
    }).catch((err)=>{
        res.json({'response':'Details not found'})  
    })  
})

//to add product in database
/*router.post('/addtocart',(req,res,next)=>{
    var collection_name="register"
    userModel.addtocart(collection_name,req.body).then((result)=>{
        res.json({'response':'product added in db'})        
    }).catch((err)=>{
        console.log(err)
    })    
})*/
module.exports=router
