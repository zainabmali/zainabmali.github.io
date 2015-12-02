$(document).ready(function() {

	
	//(".item-container").click(function () {
		//$var id = $(this).attr("id");
		//console.log(id);


		//if (id == "people-link")
		//	$('html, body').animate({
				//$( $.attr(this, 'people'))
		//	});
		//else if (id == "places-link") {
		//	$('html, body').animate({
				//$( $.attr(this, 'places'))
		//	});
		//}
		//else {
		//	$('html, body').animate({
				//$( $.attr(this, 'things'))
		//	});
		//}
//	})
//}); 



	$("#people-link").hover(function() {
		if ($('#people-description').hasClass('people-description-not-active')){
			
			$('#people-description').removeClass('people-description-not-active');
		} else {
			$('#people-description').addClass('people-description-not-active');
		}
	});


	$("#places-link").hover(function() {
		if ($('#places-description').hasClass('places-description-not-active')){
			
			$('#places-description').removeClass('places-description-not-active');
		} else {
			$('#places-description').addClass('places-description-not-active');
		}
	});

	$("#travel-link").hover(function() {
		if ($('#travel-description').hasClass('travel-description-not-active')){
			
			$('#travel-description').removeClass('travel-description-not-active');
		} else {
			$('#travel-description').addClass('travel-description-not-active');
		}
	});

});


