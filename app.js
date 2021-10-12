var express = require("express");
var bodyParser = require("body-parser");
var http = require("http");
var path = require("path");
var fileupload = require("express-fileupload");
var indexRouter = require("./server/controller/indexRouter");
var adminRouter = require("./server/controller/adminRouter");
var userRouter = require("./server/controller/userRouter");
const cors = require("cors");

var app = express();

//create application level server
app.use(bodyParser.json()); //application level middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "dist/pms"))); //for build app
app.use(fileupload());
app.use(cors());
app.use("/webapi", indexRouter);
app.use("/webapiadmin", adminRouter);
app.use("/webapiuser", userRouter);

//if we enter url manualy, it shows error cannot get ,to resolve this problem
app.get("*", function (req, res) {
  var mypath = path.join(__dirname, "dist/pms/index.html");
  res.sendFile(mypath);
});

http.createServer(app).listen(3000, (err, result) => {
  if (err) console.log(err);
  else {
    console.log("Server running....");
  }
});
