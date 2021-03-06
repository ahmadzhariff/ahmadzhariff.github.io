/*global angular*/
angular.module('app', []).config(['$httpProvider',
	function ($httpProvider) {
		$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
	}
]).controller('appCtrl', ['$scope', '$http', '$interval',
	function ($scope, $http, $interval) {
		$scope.click = function () {
			$http({
				method: 'get',
				url: 'https://ahmadzharifff.000webhostapp.com/get.php'
			}).then(function successCallback(response) {
				// Store response data
				$scope.comments = response.data;
				$scope.sortType = "time";
				$scope.sortReverse = true;
			}).catch(function (e) {
				console.log("Server Down!");
			});
		};
		$scope.submit = function () {
			$http.post('https://ahmadzharifff.000webhostapp.com/post.php', {
				name: $scope.name,
				comment: $scope.comment
			}).then(function (res) {
				console.log(res);
				$scope.name = '';
				$scope.comment = '';
				$scope.click();
			});
		};
		$scope.click();
		$scope.calender = false;
		$scope.locations = false;
		$scope.phone = false;
		$scope.activeCalender = function () {
			$scope.calender = !$scope.calender;
			$scope.locations = false;
			$scope.phone = false;
		};
		$scope.activeLocations = function () {
			$scope.locations = !$scope.locations;
			$scope.calender = false;
			$scope.phone = false;
		};
		$scope.activePhone = function () {
			$scope.phone = !$scope.phone;
			$scope.locations = false;
			$scope.calender = false;
		};
		//  $interval(function(){
		//   $scope.click();
		// },1000);
		// $interval();
	}
]).filter('toYear', function () {
	return function (dateString) {
		var res = dateString.substring(0, 10);
		var res2 = dateString.substring(11, 19);
		var dateObject = res + "T" + res2 + "Z";
		return dateObject;
	};
});
$(document).ready(function () {
	$('.carousel.carousel-slider').carousel({
		fullWidth: true,
		indicators: true,
		duration: 100
	});
});