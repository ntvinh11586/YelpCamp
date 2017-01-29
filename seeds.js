var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "Cloud's Rest",
    image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
    description: "blah blah blan"
  },
  {
    name: "Cloud's Rest",
    image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
    description: "blah blah blan"
  },
  {
    name: "Cloud's Rest",
    image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
    description: "blah blah blan"
  }
]

function seedDB() {
  Campground.remove({}, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("removed campgrounds!");
    }

    data.forEach(function(seed) {
      Campground.create(seed, function(err, campground) {
          if (err) {
            console.log(err);
          } else {
            console.log("added a campground");

            // create a comment
            Comment.create(
              {
                text: "abc abc abc",
                author: "Homer"
              }, function(err, comment) {
                if (err) {
                  console.log(err);
                } else {
                  campground.comments.push(comment);
                  campground.save();
                  console.log("Created new comment");
                }
              });
          }
      });
    });
  });
}

















module.exports = seedDB;
