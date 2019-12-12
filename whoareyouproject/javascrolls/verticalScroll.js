$("document").ready(function() {			
		
		$('.Dwnsvg').click(function(){
			$('html, body').animate({
				scrollTop: $('.container2').offset().top
			}, 1000);				   				   
		 }); 

		$('.Dwnsvg2').click(function(){		   
			$('html, body').animate({
				scrollTop: $('.container3').offset().top
			}, 1000);	
		 });							   	 
			 
		$('.Dwnsvg3').click(function(){			   
		 	$('html, body').animate({
		 		scrollTop: $('.container4').offset().top
		 	}, 1000);
		 });
		 
		/*$('.locFour').click(function(){
			$('html, body').animate({
				scrollTop: $('.scrollUp').offset().top
			}, 1000);				   
		 });*/	

		$('.scrollUp').click(function(){
			$('html, body').animate({
				scrollTop: $('.container').offset().top
			}, 1000);				   
		 });		
});