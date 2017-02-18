$(document).ready(function(){
	
$("p").click(function(){
	 $("p").css("color","red");
});

     $("#owl-h2").hover(function(){
		 $("#owl-h2").addClass("h2_background"); 
		 $("#owl-h2").removeClass("h2_font_size");
        $("#owl-h2").addClass("h2_add_font_size");
	  });
	  
	  $("#tiger_h2").hover(function(){
		 $("#tiger_h2").addClass("h2_background"); 
		 $("#tiger_h2").removeClass("h2_font_size");
        $("#tiger_h2").addClass("h2_add_font_size");
	  });
	  
	  $("#elephant_h2").hover(function(){
		 $("#elephant_h2").addClass("h2_background"); 
		 $("#elephant_h2").removeClass("h2_font_size");
        $("#elephant_h2").addClass("h2_add_font_size");
	  });
	  
	  $("button").mouseenter(function(){
        $("body").css( "background-color", "black"); 
    });

	  $("button").mouseleave(function(){
        $("body").css( "background-color", "gray"); 
    });

});

