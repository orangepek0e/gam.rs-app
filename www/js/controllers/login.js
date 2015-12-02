'use strict';

app.controller('LoginCtrl', function($scope, $state, $ionicPopup, Auth){
  $scope.emailLogin = function(){
    console.log("button was clicked");
      $scope.user = {};

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        templateUrl: 'templates/partials/login.html',
        title: 'Sign-In',
        scope: $scope,
        buttons: [
          { text: '<b>Login</b>',
            type: 'button-energized',
            onTap: function(user) {
              user = $scope.user;
              Auth.login(user).then(function(){
                $state.go('tab.dash');
              }, function(err) {
                  console.log('Error...', err);
                });

            } },
          {
            text: '<b>Register</b>',
            type: 'button-calm',
            onTap: function(user) {
              user = $scope.user;
              Auth.register(user).then(function(){
                console.log('user was successfully registered');
                $state.go('tab.dash');
              }, function(err) {
                console.log('Error...', err);
              });

            }
          }
        ]
      });

    };
});
