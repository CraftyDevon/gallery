$(document).ready(function() {


	//Same page, different albums? No problemo!

	var $album1 = $(".album1");
	var $album2 = $(".album2");
	var $album3 = $(".album3");
	var $sillyNav = $(".sillyNav")



	$(".album1Link").click(function(){
		event.preventDefault();
		if($album1.hasClass("show")){
			return;
		} else{
			$album1.siblings().removeClass("show");
			$album1.addClass("show");
			$sillyNav.addClass("hide");

			}


	});

	$(".album2Link").click(function(){
		event.preventDefault();
		if($album2.hasClass("show")){
			return;
		} else{
			$album2.siblings().removeClass("show");
			$album2.addClass("show");
			$sillyNav.addClass("hide");

		}


	});

	$(".album3Link").click(function(){
		event.preventDefault();
		if($album3.hasClass("show")){
			return;
		} else{
			$album3.siblings().removeClass("show");
			$album3.addClass("show");
			$sillyNav.addClass("hide");

		}



	});
	
	var $img = $(".albumimg");


	//Let's make those pictures resize
	$img.click(function(){
		if( $(this).hasClass("clickedimg")){
			return;
		} else{
			$(this).siblings().removeClass("clickedimg");
			$(this).siblings().children().removeClass("bigimg");
			$(this).toggleClass("clickedimg");
			$(this).children().addClass("bigimg");
		}

		// $( this ).toggleClass( "clickedimg" );
		// $(this).siblings().removeClass("clickedimg");
	});


	//Let's make those pictures resize
// $( "img" ).click(function() {

//   $( this ).toggleClass( "clickedimg" );
// });











});