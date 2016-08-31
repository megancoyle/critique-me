var mongoose = require("./connection");
var seedData = require("./seeds");
var PostModel = require("../models/Posts.js");

PostModel.remove({}).then(function(){
  PostModel.collection.insert(seedData).then(function(){
    process.exit();
  });
});
