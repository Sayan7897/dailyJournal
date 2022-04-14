//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

const homeStartingContent =  "A love poem will not always be long and flowery. Sometimes what you need to say can be very short. In fact it may be the fact that the poem is short that makes it special. Its short length may show that you put the time and effort in to make every word count. You considered carefully every word choice. Every word choice has a reason behind it. A short poem can be the ultimate act of romance when it is given the time and effort that it deserves. Source: https:www.familyfriendpoems.com/poems/love/short/ "
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
const aboutContent = "Short love poems are in great demand, so here is a whole page dedicated to short love poetry. If you're looking for short love messages or short romantic poems, this is the place. <br> Short love sayings use imagination, as this short love verse does.";
const anotherContent = "Idle Dreams In idle dreams of long ago, I imagined my true love; A perfect match, a soulmate, An angel from above. Now you’re here, and now I know Our love will stay and thrive and grow."
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];
app.get("/", function(req,res){
  res.render("home",{
    startingContent:homeStartingContent,
    posts:posts
    });

});
app.get("/post", function(req,res){
  res.render("post",{
    posts:posts
    });

});

app.get("/about", function(req,res){
  res.render("about",{
    aboutContent:aboutContent,
    anotherContent:anotherContent
    });
});

app.get("/contact", function(req,res){
  res.render("contact",{contactContent:contactContent});
});

app.get("/compose", function(req,res){
  res.render("compose");
});

app.post("/compose", function(req,res){

  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };
  posts.push(post);
  res.redirect("/");
});

app.get("/posts/:postName", function(req, res){
  const requestedTitle = _.lowerCase(req.params.postName);

  });


  posts.forEach(function(post){
    const storedTitle = _.lowerCase(post.title);
    if (storedTitle === requestedTitle) {
    res.render("post",{
      title: post.title,
      content: post.content
    });
};
  });





app.listen(3000, function() {
  console.log("Server started on port 3000");
});
