$(document).ready(function() {
	$(".tasks").on("click", "li", function() {
		$(this).toggleClass("done");
	})

	$(".add").click(function() {
		$("ul:first-child").prepend("<li>Test</li>");
		// $('.list').css("background", "black");
	})
})