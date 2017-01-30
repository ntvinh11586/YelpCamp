var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "Cloud's Rest",
    image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ipsum libero, ac pulvinar lorem commodo et. Suspendisse a tempor metus. Quisque consectetur eros eget mollis gravida. Aliquam quam turpis, sagittis et odio at, vestibulum aliquam eros. Aliquam erat volutpat. Suspendisse volutpat sem at arcu molestie, eu porta orci efficitur. Morbi id odio finibus, auctor erat in, consequat sem. Quisque vitae eleifend nisi, in luctus nunc. Etiam vitae orci aliquet, ultricies ante quis, ultricies odio. Nulla porta pretium risus eget luctus. Maecenas et orci dolor."
  },
  {
    name: "Cloud's Rest",
    image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ipsum libero, ac pulvinar lorem commodo et. Suspendisse a tempor metus. Quisque consectetur eros eget mollis gravida. Aliquam quam turpis, sagittis et odio at, vestibulum aliquam eros. Aliquam erat volutpat. Suspendisse volutpat sem at arcu molestie, eu porta orci efficitur. Morbi id odio finibus, auctor erat in, consequat sem. Quisque vitae eleifend nisi, in luctus nunc. Etiam vitae orci aliquet, ultricies ante quis, ultricies odio. Nulla porta pretium risus eget luctus. Maecenas et orci dolor."
  },
  {
    name: "Cloud's Rest",
    image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ipsum libero, ac pulvinar lorem commodo et. Suspendisse a tempor metus. Quisque consectetur eros eget mollis gravida. Aliquam quam turpis, sagittis et odio at, vestibulum aliquam eros. Aliquam erat volutpat. Suspendisse volutpat sem at arcu molestie, eu porta orci efficitur. Morbi id odio finibus, auctor erat in, consequat sem. Quisque vitae eleifend nisi, in luctus nunc. Etiam vitae orci aliquet, ultricies ante quis, ultricies odio. Nulla porta pretium risus eget luctus. Maecenas et orci dolor."
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
