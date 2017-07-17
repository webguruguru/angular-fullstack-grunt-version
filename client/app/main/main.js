(function () {

  'use strict';

  angular
    .module('base1App')
    .config(config);

  /* @ngInject */
  function config($stateProvider) { 
    $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    });
  }

})();  