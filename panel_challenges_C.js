$(document).ready(function(){
  
 $(".button").click(function(){
    var changeColor = $(this).css("background-color");
  $(".reset_button").css("background-color",changeColor);

   });
});