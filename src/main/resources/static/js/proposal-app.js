
angular.module('proposalsApp',['ui.router']).config(function($stateProvider,$urlRouterProvider) {
	 
    $stateProvider
        .state('savedProposals', {
            url:'/savedProposals',
            templateUrl: 'savedProposals.html',
            controller: 'proposalController'
        })
        .state('sharedProposals', {
            url:'/sharedProposals',
            templateUrl: 'sharedProposals.html',
            controller: 'proposalController'
        })
});
