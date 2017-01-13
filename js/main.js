/**
 * Created by Veket on 2015/10/22.
 */
var ctApp=angular.module('ctApp', [
    'ui.router',
    'ngRequire',
    'react',
    'angular-underscore',
    'Service'
]).config(function($stateProvider,$urlRouterProvider, $requireProvider){
    angular.forEach(APP_CONFIG.routers,function(item){
        if(_.isEmpty(item.controller)){
            $stateProvider.state(item.name, {url: item.url,templateUrl:item.templateUrl });
        }else{
            $stateProvider.state(item.name, {
                url: item.url,
                views: {
                    '': {
                        templateUrl:item.templateUrl,
                        resolve: {deps: $requireProvider.requireJS(item.controller)}
                    }
                }
            });
        }
    });
}).run(function($rootScope, $location){
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        if(_.isEmpty($location.path())) $location.path('/login');
    });
});