var mongoose = require("mongoose");

var ArtworkSchema = new mongoose.Schema(
  {
    title: String,
    artist: String,
    imageUrl: String,
    yearMade: Number
  }
);

mongoose.model("Artwork", ArtworkSchema);
mongoose.connect("mongodb://localhost/critique-me");

module.exports = mongoose;
