// mongodb connection
var mongoose = require("mongoose");

if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.heroku_65cws70w);
}else{
mongoose.connect("mongodb://localhost/critique-me");
}
