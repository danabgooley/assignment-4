

$(document).ready(function(){


	// READ MORE BLOG

	$(".readmore").click(expand);

	function expand(){
	event.preventDefault()
		$("#show-this-on-click").slideDown();
		$(".readmore").hide();
		$(".readless").show();
	}
	
	$(".readless").click(collapse);

	function collapse(){
	event.preventDefault()
		$("#show-this-on-click").slideUp();
		$(".readless").hide();
		$(".readmore").show();
	}

	// LEARN MORE SIDEBAR

	$(".learnmore").click(slideDown);
	event.preventDefault()
	function slideDown () {
		$(".learnmore").hide();
		$(".learnless").show();
		$("#learnmoretext").slideDown();
	}

	$(".learnless").click(slideUp);
	event.preventDefault()
	function slideUp () {
		$(".learnless").hide();
		$(".learnmore").show();
		$("#learnmoretext").slideUp()
	}

});

