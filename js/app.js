$(document).ready(function() {
	$(".tasks").on("click", "li", function() {
		$(this).toggleClass("done");
	})

	$(".addItem").mouseenter(function() {
		$('textarea').show();
		$('textarea').focus();
	})

	$("textarea").keypress(function(event) {
		if (event.which == 13) {
			var task = $(this).val();
			$("ul:first-child").prepend("<li>"+task+"</li>");
			$(this).val("");
		}
	})

	$("li").on("dblclick", function() {
		$(this).fadeOut('fast');
	})

	$(".add").click(function() {
		$('textarea').show();
		$('textarea').focus();
	})
})