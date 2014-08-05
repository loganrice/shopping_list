$(document).ready(function() {
	$(".tasks").on("click", "li", function() {
		$(this).toggleClass("done");
	})

	$(".tasks").mouseleave(function() {
		$('textarea').val('');
		$('textarea').hide();
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

	$(".tasks").on("dblclick", "li", function() {
		$(this).fadeOut('fast');
	})

	$(".add").click(function() {
		$('textarea').show();
		$('textarea').focus();
	})

	$(".projects .list").on("click", "li", function() {
		$( "li" ).removeClass( "active" );
		$(this).toggleClass("active");
	})
})