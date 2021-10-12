const { Promise } = require("mongoose");
var db = require("./connection");

function indexModel() {
  this.usersignup = (collection_name, userDetails) => {
    return new Promise((resolve, reject) => {
      db.collection(collection_name)
        .find()
        .toArray((err, result) => {
          if (err) reject(err);
          else {
            var _id;
            if (result.length == 0) _id = 0;
            else {
              var max_id = result[0]._id;
              for (let row of result) {
                if (max_id < row._id) max_id = row._id;
              }
              _id = max_id;
            }

            userDetails._id = _id + 1;
            userDetails.role = "admin";
            userDetails.status = 1;
            userDetails.info = Date();
            //console.log(userDetails)
            db.collection(collection_name).insertOne(
              userDetails,
              (err, result) => {
                err ? reject(err) : resolve(result);
              }
            );
          }
        });
    });
  };
  this.userlogin = (collection_name, userDetails) => {
    return new Promise((resolve, reject) => {
      //we have to check user exist in db or not
      //fetch all record from mongodb insted of that we match contect
      db.collection(collection_name)
        .find({
          email: userDetails.email,
          password: userDetails.password,
          status: 1,
        })
        .toArray((err, result) => {
          err ? reject(err) : resolve(result);
        });
    });
  };

  this.contactus = (collection_name, contactDetails) => {
    return new Promise((resolve, reject) => {
      db.collection(collection_name)
        .find()
        .toArray((err, result) => {
          if (err) reject(err);
          else {
            var _id;
            if (result.length == 0) _id = 0;
            else {
              var max_id = result[0]._id;
              for (let row of result) {
                if (max_id < row._id) max_id = row._id;
              }
              _id = max_id;
            }

            contactDetails._id = _id + 1;
            //userDetails.role="user"
            //userDetails.status=1
            contactDetails.info = Date();
            //console.log(userDetails)
            db.collection(collection_name).insertOne(
              contactDetails,
              (err, result) => {
                err ? reject(err) : resolve(result);
              }
            );
          }
        });
    });
  };
}
module.exports = new indexModel();
