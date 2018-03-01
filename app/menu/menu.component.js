(function () {
  'use strict';

  angular.module('rootModule')
    .component('menu', {
      templateUrl: 'menu/menu.component.html',
      controller: [
        function() {
          angular.extend(this, {
            menuItems: [
              { name: 'Eggs', price: 1.99 },
              { name: 'Toast', price: 2.05 },
              { name: 'Waffles', price: 6.95 },
              { name: 'French Toast', price: 11.95 }
            ]
          });
        }
      ]
    });
})();



