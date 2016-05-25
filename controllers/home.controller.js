

angular.module('sharingsmiles', []).controller('HomeController',HomeController);

function HomeController($scope){
   var loader = function(){
    $( "#loader" ).delay(4000.50).fadeOut(400, function(){
        $( "body" ).fadeIn(400);
    });  
   };

  // Document on load.
  $(document).ready(function() {
    loader();
  });

} 