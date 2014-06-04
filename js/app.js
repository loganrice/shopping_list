$(document).ready(function() {
	$(".tasks").on("click", "li", function() {
		$(this).toggleClass("done");
	})

	$(".add").click(function() {
		$("ul:first-child").prepend("<li>Test</li>");
	})

	$(".add").mouseenter(function() {
		$('textarea').css("display", "block");
		$('textarea').focus();
	})
	.mouseleave(function() {
		$('textarea').css("display", "none");
	})
})