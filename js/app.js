$(document).ready(function() {
	$(".tasks").on("click", "li", function() {
		$(this).toggleClass("done");
	})
})