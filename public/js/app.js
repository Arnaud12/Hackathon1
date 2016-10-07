angular.module('app', ['ngRoute'])
        .service('todoService', todoService)
        .controller('mainController', mainController)
        .controller('agriculteurController', agriculteurController)
        .controller('acheteurController', agriculteurController)
        .config(routes)
        ;
