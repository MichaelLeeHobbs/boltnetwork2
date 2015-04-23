app.directive('program-listing', function() {
  console.log('directive called');
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'js/directives/programListing.html',
	};
});
console.log('directive loaded');
