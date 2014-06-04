$(document).ready(function() {
	$(".tasks").on("click", "li", function() {
		$(this).toggleClass("done");
	})

	$(".add").mouseenter(function() {
		$('textarea').show();
		$('textarea').focus();
	})
	.mouseleave(function() {
		$('textarea').hide();
	})

	$("textarea").keypress(function(event) {
		if (event.which == 13) {
			var task = $(this).val();
			$("ul:first-child").prepend("<li>"+task+"</li>");
		}
	})
})