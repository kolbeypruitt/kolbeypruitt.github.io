app.controller('HomeController', function ($scope, $http, $location, $rootScope, NgMap, $cookies) {

  $http.get('/api/v1/resortData').then(function (response) {
    $scope.allResorts = response.data;
  });
  
  $scope.message = 'All Resorts Page'

  $http.get('/_=_').then(function (response) {
    $cookies.put('facebookId', response.data.facebookId);
    $cookies.put('firstName', response.data.firstName);
    $cookies.put('lastName', response.data.lastName);
    $scope.user = $cookies.getAll()
    // console.log(response.data);
    // console.log($scope.user);
  })
});
