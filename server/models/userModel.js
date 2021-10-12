const { Promise } = require('mongoose')
var db = require('./connection')

function userModel()
{   
    //change password
    this.cpuser=(collection_name,cpdata)=>{
        return new Promise((resolve,reject)=>{
            //fetch userDetailes
            db.collection(collection_name).find({"username":cpdata.username,'password':cpdata.opass}).toArray((err,result)=>{
                err? reject(err) : resolve(result);
            })
        })
    }
    this.upuser=(collection_name,cpdata)=>{
        return new Promise((resolve,reject)=>{				
            db.collection(collection_name).updateOne({"username":cpdata.username},
            {$set:{'password':cpdata.npass}},(err,result)=>{
                err? reject(err) : resolve(result);
            })
        })
    }
    //Edit Profile
    this.epfetch=(collection_name,userDetailes)=>{
        return new Promise((resolve,reject)=>{
            //fetch userDetailes
            db.collection(collection_name).find(userDetailes).toArray((err,result)=>{
                err? reject(err) : resolve(result);
            })
        })
    }
    this.upuser2=(collection_name,userDetails)=>{
        return new Promise((resolve,reject)=>{
            //fetch userDetailes
            db.collection(collection_name).updateOne({'email':userDetails.email},{$set:{'name':userDetails.name,'username':userDetails.username,'number':userDetails.number,'number':userDetails.number,'address':userDetails.address,'city':userDetails.city,'gender':userDetails.gender}},(err,result)=>{
                err ? reject(err) : resolve(result);        
            }) 
        })
    }
    this.fetchProdDetails=(collection_name)=>{
        return new Promise((resolve,reject)=>{
            db.collection(collection_name).find().toArray((err,result)=>{
                err ? reject(err) : resolve(result);        
            })                
        })    
    }

    this.payment=(collection_name,pDetails)=>{
        return new Promise((resolve,reject)=>{
                db.collection(collection_name).find().toArray((err,result)=>{
                    if(err)
                        reject(err);
                    else
                    {
                        var _id
                        if(result.length==0)
                            _id=0
                        else
                        {
                           var max_id=result[0]._id
                           for(let row of result)
                           {
                                if(max_id<row._id)
                                    max_id=row._id               
                           }
                           _id=max_id
                        }            
                        
                        pDetails._id=_id+1
                        
                        db.collection(collection_name).insertOne(pDetails,(err,result)=>{
                            err ? reject(err) : resolve(result);        
                        })
                    }            
                })
                
        });
    }

    this.fetchDetails=(collection_name,email)=>{
        return new Promise((resolve,reject)=>{
            db.collection(collection_name).find().toArray((err,result)=>{
                err ? reject(err) : resolve(result);        
            })                
        })    
    }
   
    /*this.addtocart=(collection_name,data)=>{
        return new Promise((resolve,reject)=>{
            console.log('from userModel '+data.ProductTitle,data.ProductPrice,data._id)
                db.collection(collection_name).updateOne({'_id':data._id},{$set:{'ProductTitle':data.ProductTitle,'ProductPrice':data.ProductPrice}},(err,result)=>{
                    err ? reject(err) : resolve(result);                    
                })        
        })
    }*/

}
module.exports=new userModel()