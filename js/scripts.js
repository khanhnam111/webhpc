$(document).ready(
  function(){
    $('.learning').waypoint(
      function(direction){
        if(direction == "down"){
          $('header').addClass('sticky');
        }else {
          $('header').removeClass('sticky');
        }
      },{
        offset: '600px'
      }
    )
  }
)