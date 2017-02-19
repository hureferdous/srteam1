$(document).ready(function(){
  
	 
     
	   $(".button").click(function(){
	$  ("#panel_container .button_container").siblings().fadeTo(2000, .5);
   });
       $("reset_button").click(function(){
	$  ("#panel_container .button_container").siblings().fadeTo(2000, 1);
	   });


 $(".button").click(function(){
  $("#panel_container .button_container").siblings().hide();
   }); 
   
    $(".button").click(function(){
    $(this).hide();
	
	
	$(".button").mouseenter(function(){
	$(this).addClass("color_Black");
   });

 
   $(".button").mouseout(function(){
	$(this).removeClass("color_Black");
   });
   
   
	});