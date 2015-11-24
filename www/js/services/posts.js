'use strict';

app.factory('Posts', function(FURL, $firebaseArray) {
  var ref = new Firebase(FURL);
  var posts = $firebaseArray(ref.child('posts'));

  var Posts = {

    all: function(){
      return posts;
    },

    savePost: function(post){
      var newPost = {
        title: post.title,
        gameName: post.gameName,
        systemName: post.systemName,
        description: post.description
      };

      return posts.$add(newPost).then(function(){
        console.log('added to database');
      })
    }

  };
  return Posts;
});
