var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider
 
        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
           
        })
 
        // route for the about page
        .when('/company', {
            templateUrl : 'pages/company.html',
            controller  : 'companyController'
        })
 
        // route for the contact page
        .when('/news', {
            templateUrl : 'pages/news.html',
            controller  : 'newsController'
        })

         .when('/planProject', {
            templateUrl : 'pages/planProject.html',
            controller  : 'planController'
        })

          .when('/buildProject', {
            templateUrl : 'pages/buildProject.html',
            controller  : 'buildController'
        })

           .when('/teamInfo', {
            templateUrl : 'pages/teamInfo.html',
            controller  : 'teamController'
        })

            .when('/aboutus', {
            templateUrl : 'pages/aboutus.html',
            controller  : 'aboutController'
        }) 
        .otherwise({redirectTo:'/'});
});
 

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});


 scotchApp.controller('companyController', function($scope) {
    $scope.message = 'company pages.';
});

scotchApp.controller('newsController', function($scope) {
    $scope.message = 'news  pages.';
});

scotchApp.controller('planController', function($scope) {
    $scope.message = 'plan pages.';
});

scotchApp.controller('buildController', function($scope) {
    $scope.message = 'build page.';
});

scotchApp.controller('teamController', function($scope) {
    $scope.message = 'team pages .';
});


scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});
 





