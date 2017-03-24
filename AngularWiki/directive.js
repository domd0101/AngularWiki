angular.module('WikiApp')
.directive('dir', function($timeout) {
  return {
    restrict: 'AE',
    templateUrl: './test.html',
    controller: 'WikiController',
    link: function(scope, elem, attrs) {
      scope.searchitem;
      scope.stuff =[];
      var stuff2 =[];
      scope.store = function(val){
        console.log('store',val);
        scope.stuff = val;
      }


        scope.blah = function(incomingText){
          // scope.stuff.splice(0);
          console.log('work');
          var api='https://en.wikipedia.org/w/api.php?action=opensearch&search=' + incomingText + '&format=json&callback=?';
            scope.theData = $.ajax({
              type: "GET",
              url: api,
              async: false,
              dataType: "json",
              success: function(data){
                console.log('success')
                for(var i=0;i<10;i++){
                  // console.log(i, data[1][i]);
                stuff2.push({
                  title:        data[1][i],
                  description:  data[2][i],
                  kLink:        data[3][i]
                });
                console.log('stuff2 in loop', stuff2);
              }
                scope.store(stuff2);
                return;
              },
              error:function(errorMessage){
                alert('ERROR');}
              })
            }
      // $timeout(function() {
      //     }, 500)





//++++++++END++++++++////
        }
      }
    }
  )
