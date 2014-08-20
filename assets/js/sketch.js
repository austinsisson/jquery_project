function gridSetup() {
	$(".column").removeClass("highlight");
	$("body").append("<div id ='container'></div");
	$("#container").empty();
	
	var number = prompt('What size grid would you like? Grid will have equal sides.');
	
	for (i=0; i < number; i++){
		$("#container").append("<div class='row'></div>");
	}
	for (i=0; i < number; i++){
		$(".row").append('<div class="column"></div>');
	}
	
	$(".column").hover(function (){
		$(this).addClass("highlight");
	});
};


$(document).ready(function () {
	$("body").append("<div id ='container'></div");
	for (i=0; i<16; i++){
		$("#container").append("<div class='row'></div>");
	}
	for (i=0; i<16; i++){
		$(".row").append('<div class="column"></div>');
	}
	
	$(".column").hover(function (){
		$(this).addClass("highlight");
	});
	$("body").append("<footer>A simple web app created by Austin Sisson as part of The Odin Project. 8/2014</footer>");
	$("button").click(gridSetup);
});
