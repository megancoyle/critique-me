var express = require("express");
var parser = require("body-parser");
var methodOverride = require("method-override");
var hbs = require("express-handlebars");
var mongoose = require("./db/connection");
var Artwork = mongoose.model("Artwork");
var app = express();

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));
app.use(methodOverride('_method'))

app.get("/", function(req, res){
  Artwork.find({}).then(function(artworks){
    res.render("index", {
      artworks: artworks
    });
  });
});

app.get("/:title", function(req, res){
  var title = req.params.title
  Artwork.findOne({title: title}).then(function(artwork){
    res.render("artwork-show", {
      artwork: artwork
    });
  });
});

app.post("/", function(req, res){
  Artwork.create(req.body).then(function(artwork){
    res.redirect("/" + artwork.title);
  });
});

app.delete("/:title/delete", function(req, res) {
  Artwork.findOneAndRemove({title: req.params.title}).then(function(){
    res.redirect("/")
  });
});

app.put("/:title", function(req, res){
  Artwork.findOne({title: req.params.title}).then(function(artwork){
    artwork.title = req.body.title;
    artwork.save(function(err){
      if(!err){
        res.redirect("/" + artwork.title);
      }
    })
  });
});

app.listen(app.get("port"), function(){
  console.log("Time to start arting");
});
