// $(".hide")event.preventDefault();

$(document).ready(function(){

	// READ MORE BLOG

	$(".readmore").click(expand);

	function expand(){
		$("#show-this-on-click").show();
		$(".readmore").hide();
		$(".readless").show();
	}
	
	$(".readless").click(collapse);

	function collapse(){
		$("#show-this-on-click").hide();
		$(".readless").hide();
		$(".readmore").show();
	}

	// LEARN MORE SIDEBAR

	$(".learnmore").click(slideDown);

	function slideDown () {
		$(".learnmore").hide();
		$(".readless").show();
		$("#learnmoretext").show();
	}

	$(".readless").click(slideUp);

	function slideUp () {
		$(".readless").hide();
		$(".learnmore").show();
		$("#learnmoretext").hide()
	}

});