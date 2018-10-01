angular.module('app', [])
.config(['$httpProvider', function($httpProvider) {  
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    
}]).controller('AppCtrl', ['$http', function($http){
    $c = this;
  	$c.send = function(){
        $http.post('https://ahmadzharifff.000webhostapp.com/post.php', {name: $c.name, comment: $c.comment})
        	.then(function(res) {
            	$c.response = res;
        	})
    };
}]).controller('userCtrl', ['$scope', '$http', function ($scope, $http,) {
 $http({
  method: 'get',
  url: 'https://ahmadzharifff.000webhostapp.com/get.php'
 }).then(function successCallback(response) {
  // Store response data
  $scope.users = response.data;
 
 });
}]);