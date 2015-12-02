'use strict';

app.controller('DashCtrl', function($scope, Posts) {
  $scope.posts = Posts.all();
  console.log('the posts', $scope.posts);

});
