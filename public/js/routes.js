const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/acheteur', {
            templateUrl: 'views/Pages/acheteur.html',
            controller: 'acheteurController',
            controllerAs: 'vm'
        })
        .when('/agriculteur', {
            templateUrl: 'views/Pages/agriculteur.html',
            controller: 'agriculteurController',
            controllerAs: 'vm',
        })
        .otherwise({
            redirectTo: '/'
        })

}
