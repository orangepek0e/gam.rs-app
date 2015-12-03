'use strict';

app.controller('LocationCtrl', function(FURL, $firebaseObject, $firebase, $scope, $cordovaGeolocation, Auth) {
  var ref = new Firebase(FURL);
  var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    alert(position.coords.latitude);
    alert(position.coords.longitude);

    var Coords = {
     userLongitude: position.coords.longitude,
     userLatitude:  position.coords.latitude
    };

    ref.child('profile').child(Auth.user.uid).update(Coords);

//Ask Rob how to link 'profile' child up to here to send this data to it.

  }, function(error){
    console.log("Could not get location");
  });

  return Coords;
});
