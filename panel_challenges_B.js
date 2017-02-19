$(document).ready(function(){
	   $("th").click(function(){
		  $("tr").children().removeClass("orange")
		  $(this).siblings().addClass("orange");
	   });
});