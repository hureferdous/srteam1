$(document).ready(function(){
     $("button").mouseenter(function(){
				      $(this).removeClass("change_background_color").addClass("add_border");
				  });
    $("button").mouseleave(function(){
				      $(this).addClass("change_background_color").removeClass("add_border");
	 });
 });