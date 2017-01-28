var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  var campgrounds = [
    {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
    {name: "Granite Hill", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
    {name: "Moutain Goats Rest", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"}
  ];
  res.render("campgrounds", {campgrounds:campgrounds});
});

app.listen(3000, function() {
  console.log("The YelpCamp Server Has Started!");
});
