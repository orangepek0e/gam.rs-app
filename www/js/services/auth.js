'use strict'

app.factory('Auth', function(FURL, $firebaseAuth, $state){
  var ref = new Firebase(FURL);
  var auth = $firebaseAuth(ref);

  var Auth = {

    user: {},

    login: function(user){
      console.log("we got a login function");
      return auth.$authWithPassword({
        email: user.email,
        password: user.password
      });
    },

    register: function(user){
      console.log("Register Function");
      return auth.$createUser({
        email: user.email,
        password: user.password
      }).then(function(){
        console.log('user is saving');
        return Auth.login(user);
      });
    }

    };

  auth.$onAuth(function(authData){
    if (authData){
      Auth.user=authData;
      console.log("user has already logged in");
      $state.go('tab.dash');
    }
  });
  return Auth;
});
