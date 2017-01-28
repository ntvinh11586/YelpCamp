var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

///// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

Campground.create(
  {
    name: "Salmon Creek",
    image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
    description: "Lorem inspum"
  }, function(err, campground) {
    if (err) {
      console.log(err);
    } else {
      console.log("NEWLY CRATED CAMPGROUND :");
      console.log(campground);
    }
  }
);

var campgrounds = [
  {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
  {name: "Granite Hill", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
  {name: "Moutain Goats Rest", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
  {name: "Calorica", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
  {name: "Moutain Hill", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
  {name: "Moutain Sail Roode", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
  {name: "Nicke Berlin", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"}
];

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds", {campgrounds:allCampgrounds});
    }
  });
});

app.post("/campgrounds", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  Campground.create(newCampground, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  });
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new");
  // res.render("landing");
});

app.get("/campgrounds/:id", function(req, res) {
  res.send
});

app.listen(3000, function() {
  console.log("The YelpCamp Server Has Started!");
});
