var $ = require('jquery');
var models = require('./models');
var views = require('./views');

$(function(){
  var view = new PostView();

  $(document).on('posts:fetched', function(event, posts){
    view.showPosts(posts);
  });

  Post.fetch();
});

function hello(){
  return 'hello world';
}

$("#thisform").submit(function(event){
  event.preventDefault();
   var adding = $("#fname").val();
  $("#thecontainer").append("<p>" + adding + "</p>")
})

module.exports = {"hello": hello};
