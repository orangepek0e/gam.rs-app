'use strict';

app.factory('Posts', function(FURL, $firebaseArray, Auth) {
  var ref = new Firebase(FURL);
  var posts = $firebaseArray(ref.child('posts'));

  var Posts = {

    all: function(){
      return posts;
    },

    savePost: function(post){

      var newPost = {
        post_userPhoto: Auth.user.profile.gravatar,
        post_userName: Auth.user.profile.name,
        userLongitude: Auth.user.profile.userLongitude,
        userLatitude: Auth.user.profile.userLatitude,
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
