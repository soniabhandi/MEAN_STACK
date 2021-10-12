var express = require('express')
const { Collection } = require('mongoose')
var router = express.Router()
var adminModel = require('../models/adminModel')
var path=require('path')

router.get('/',(req,res,next)=>{
    res.send('its working , admin router invoked')
})

router.get('/fetchusers',(req,res,next)=>{
    collection_name="register"
    adminModel.fetchUsers(collection_name).then((result)=>{
        //console.log(result)
        res.json(result)        
    }).catch((err)=>{
        console.log(err)
    })    
})

router.post('/manageuserstatus',(req,res,next)=>{
    var collection_name="register"
    adminModel.manageuserstatus(collection_name,req.body).then((result)=>{
        res.json(result)        
    }).catch((err)=>{
        console.log(err)
    })    
})

router.post('/cpadmin',(req,res,next)=>{
    //console.log(req.body)
    var collection_name="register"
    adminModel.cpadmin(collection_name,req.body).then((result)=>{
        if(result.length==0)
			res.json({'response':0})
		else
		{
			if(req.body.npass==req.body.cnpass)
			{
                adminModel.upadmin(collection_name,req.body).then((result)=>{
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


router.post('/epfetch',(req,res,next)=>{
	collection_name='register'
	adminModel.epfetch(collection_name,req.body).then((result)=>{
		res.json(result[0])
	}).catch((err)=>{
		console.log(err)
	})
})

router.post('/upadmin',(req,res,next)=>{
	collection_name='register'
	adminModel.upadmin2(collection_name,req.body).then((result)=>{
		res.json(result)
	}).catch((err)=>{
		console.log(err)
	})
})
router.post('/addproduct',(req,res,next)=>{
    var collection_name="product"
    adminModel.addproduct(collection_name,req.body).then((result)=>{
        res.json({'response':'Project added successfully...'})        
    }).catch((err)=>{
        res.json({'response':'Project not added'})  
    })  
})
router.get('/fectprod',(req,res,next)=>{
    collection_name="product"
    adminModel.loadproduct(collection_name).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.send('fail')
    })
})

router.post("/uploadpic",(request,response)=>
{   
    collection_name='product'
    var uploadFile = request.files.product_image
    var filename = Date.now() + path.extname(uploadFile.name);

    uploadFile.mv(path.join(__dirname,"../../dist/pms/assets/product",filename))
    uploadFile.mv(path.join(__dirname,"../../src/assets/product",filename))

    adminModel.uploadImage(collection_name,request.body.pid,filename).then((result)=>
    {
        response.send({status:result,filename:filename})
    }).catch((err)=>{
        response.send('err')
    })
})

module.exports=router
