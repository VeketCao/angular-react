/**
 * Created by Veket on 2015/11/1.
 */
ctApp.controller('login',function($scope){
    console.log("login");


}).controller('header',function($scope,$location){
    $scope.logoutClick=function(){

        $location.path("login");
    };
});