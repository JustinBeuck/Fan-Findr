// Declares the initial angular module "meanMapApp". Module grabs other controllers and services.
var app = angular.module('fanFinderApp', ['addCtrl', 'queryCtrl', 'headerCtrl', 'geolocation', 'gservice', 'ngRoute'])

    // Configures Angular routing -- showing the relevant view and controller when needed.
    .config(function($routeProvider){

        // Join Team Control Panel
        $routeProvider.when('/', {
            // controller: 'addCtrl',
            templateUrl: 'partials/home.html',

        // Find Teammates Control Panel
        }).when('/find', {
            controller: 'queryCtrl',
            templateUrl: 'partials/queryForm.html',

        // All else forward to the Join Team Control Panel
        }).when('/join', {
            controller: 'addCtrl',
            templateUrl: 'partials/addForm.html',

        // All else forward to the Join Team Control Panel
        }).otherwise({redirectTo:'/'})
    });
