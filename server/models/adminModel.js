const { Promise } = require('mongoose')
var db = require('./connection')

function adminModel()
{
    this.fetchUsers=(collection_name)=>{
        return new Promise((resolve,reject)=>{
            db.collection(collection_name).find({'role':'user'}).toArray((err,result)=>{
                err ? reject(err) : resolve(result);
            })
        })        
    }    

    this.manageuserstatus=(collection_name,data)=>{
        return new Promise((resolve,reject)=>{
            if(data.status=='block')
            {
                db.collection(collection_name).updateOne({'_id':data._id},{$set:{'status':0}},(err,result)=>{
                    err ? reject(err) : resolve(result);                    
                })        
            }   
            else if(data.status=='verify')
            {
                db.collection(collection_name).updateOne({'_id':data._id},{$set:{'status':1}},(err,result)=>{
                    err ? reject(err) : resolve(result);                    
                })
            }
            else
            {   
                db.collection(collection_name).deleteOne({'_id':data._id},(err,result)=>{
                    err ? reject(err) : resolve(result);                    
                })
            }
        })
    }
    //Change password : fetch userDetailes by their email and old password
    this.cpadmin=(collection_name,cpdata)=>{
        return new Promise((resolve,reject)=>{
            db.collection(collection_name).find({"username":cpdata.username,'password':cpdata.opass}).toArray((err,result)=>{
                err? reject(err) : resolve(result);
            })
        })
    }
    //Change password : update password in database
    this.upadmin=(collection_name,cpdata)=>{
        return new Promise((resolve,reject)=>{				
            db.collection(collection_name).updateOne({"username":cpdata.username},
            {$set:{'password':cpdata.npass}},(err,result)=>{
                err? reject(err) : resolve(result);
            })
        })
    }
    this.epfetch=(collection_name,userDetailes)=>{
        return new Promise((resolve,reject)=>{
            //fetch userDetailes
            db.collection(collection_name).find(userDetailes).toArray((err,result)=>{
                err? reject(err) : resolve(result);
            })
        })
    }
    this.upadmin2=(collection_name,userDetails)=>{
        return new Promise((resolve,reject)=>{
            //fetch userDetailes
            db.collection(collection_name).updateOne({'email':userDetails.email},{$set:{'name':userDetails.name,'username':userDetails.username,'number':userDetails.number,'address':userDetails.address,'city':userDetails.city,'gender':userDetails.gender}},(err,result)=>{
                err ? reject(err) : resolve(result);        
            }) 
        })
    }
    this.addproduct=(collection_name,pDetails)=>{
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

    this.loadproduct=(collection_name)=>{
        return new Promise((resolve,reject)=>{
            db.collection(collection_name).find().toArray((err,result)=>{
                err ? reject(err) : resolve(result)  
           
            })
            
        });        
    }

    this.uploadImage=(collection_name,pid,filename)=>{
        return new Promise((resolve,reject)=>{
            db.collection(collection_name).updateOne({'_id':parseInt(pid)},{$set:{'prodimg':filename}},(err,result)=>{
                err ? reject(err) : resolve(result)  
            })
        })
    }
}

module.exports=new adminModel()