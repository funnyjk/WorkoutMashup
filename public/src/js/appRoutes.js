angular.module('uiRout', [])
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$urlRouterProvider.otherwise('/');

		$stateProvider

			.state('main', {
				templateUrl: 'views/content.html',
			})
			.state('main.home', {
				url: '/',
					views: {
					'':		{ template: "<div class='row'><div ui-view='sec1' class='small-4 columns'></div><div ui-view='sec2' class='small-4 columns'></div><div ui-view='sec3' class='small-4 columns'></div></div>" },
					'sec1@main.home':	{ templateUrl: 'views/partials/section/descript.html' },
					'sec2@main.home':	{ templateUrl: 'views/partials/section/social.html' },
					'sec3@main.home':	{ templateUrl: 'views/partials/section/contact.html' },
				},
			})
			.state('main.about', {
				url: '/about',
				templateUrl: 'views/partials/section/about.html',
			})
			.state('main.social', {
				url: '/social',
				templateUrl: 'views/partials/section/social.html',
			})
			.state('main.contact', {
				url: '/contact',
				templateUrl: 'views/partials/section/contact.html',
			});
}]);