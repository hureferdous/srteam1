$(document).ready(function(){
	  $(".stream").on("click", function() {
		  
		   var streamId = $(this).attr("id");
		   var cardClass = $(".card").attr("class").split(" ")[0];
		   
		   if ($("." + streamId).css("background-color") == "red") {
            $("." + streamId).css("background-color", "#aaa");
        } else {
            $("." + cardClass).css("background-color", "#aaa");
            $("." + streamId).css("background-color", "red");
        }
		   
	  });
	  
});