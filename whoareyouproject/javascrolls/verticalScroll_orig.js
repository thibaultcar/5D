$("document").ready(function() {			
		
		$('.locOneimage').click(function(){				   
			$('html, body').animate({
				scrollTop: $('.locTwoimage').offset().top
			}, 1000);				   				   
		 });

		$('.locTwoimage').click(function(){		   
			$('html, body').animate({
				scrollTop: $('.locThreeimage').offset().top
			}, 1000);	
		 });							   	 
			 
		$('.locThreeimage').click(function(){					   
		 	$('html, body').animate({
		 		scrollTop: $('.scrollUp').offset().top
		 	}, 1000);				   				   
		 });
		 
		/*$('.locFour').click(function(){					   
			$('html, body').animate({
				scrollTop: $('.scrollUp').offset().top
			}, 1000);				   
		 });*/	

		$('.scrollUp').click(function(){					   
			$('html, body').animate({
				scrollTop: $('.locOneimage').offset().top
			}, 1000);				   
		 });		
});