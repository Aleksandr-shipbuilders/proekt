const DELAY = 500;

$(document).ready(function() {
	$("#talk_close img").on("click", function() {
		$("#parent_talk").hide(DELAY);
	});
	$(".footer input").on("click", function() {
		$("#parent_talk").show(DELAY);
	});
});