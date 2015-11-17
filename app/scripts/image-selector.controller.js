'use strict';

angular.module('imageSelector', [])
	.controller('ImageSelectorCtrl', ['$scope', function ($scope) {
		$scope.selectedImage = {
			path:  'images/screenshots/valid.png'
		};
		$scope.images = [
			{ path: 'images/screenshots/valid.png' },
			{ path: 'images/screenshots/facebook-share.png' },
			{ path: 'images/screenshots/homescreen.png' },
			{ path: 'images/screenshots/invalid.png' }
		];
		$scope.selectImage = function (path) {
			if (path) {
				$scope.selectedImage.path = path;
			}
		};
	}]);