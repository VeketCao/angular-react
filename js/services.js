/**
 * Created by Veket on 2015/10/22.
 */
/**
  * @param app
 * @param $http
 * @param $location
 * @private
 */
var __initHttp=function(app,$http,$location){
    app.http=function(url,method,item,callback){
        $http({
            url: url,
            method: method,
            data: item,
            headers: {'Content-Type': 'application/json'}
        }).success(function (rtn) {
            callback(rtn);
        }).error(function(rtn){
            $location.path('404er');
        });
    }
};

angular.module('Service', []).factory('app',function($http,$location){
    var app={};

    __initHttp(app,$http,$location);

    return app;
});