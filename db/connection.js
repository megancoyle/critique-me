// mongodb connection
var mongoose = require("mongoose");

if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGOLAB_URI);
}else{
mongoose.connect("mongodb://localhost/critique-me");
}
