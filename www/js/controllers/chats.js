'use strict';

app.controller('ChatsCtrl', function($scope, Chats, Posts, $ionicModal) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
  $scope.button = function(post) {
    console.log("button was clicked", post);
    Posts.savePost(post);
  };




});
