var mongoose = require("./connection");
var seedData = require("./seeds");

var Artwork = mongoose.model("Artwork");

Artwork.remove({}).then(function(){
  Artwork.collection.insert(seedData).then(function(){
    process.exit();
  });
});
