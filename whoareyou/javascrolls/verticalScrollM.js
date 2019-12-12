$("document").ready(function() {			
		
		$('.q1').click(function(){
			$('html, body').animate({
				scrollTop: $('.questioncontainer').offset().top
			}, 1000);				   				   
		 }); 

		$('.q2').click(function(){		   
			$('html, body').animate({
				scrollTop: $('.questioncontainer2').offset().top
			}, 1000);	
		 });							   	 
			 
		$('.q3').click(function(){			   
		 	$('html, body').animate({
		 		scrollTop: $('.questioncontainer3').offset().top
		 	}, 1000);
		 });
		 
		$('.q4').click(function(){
			$('html, body').animate({
				scrollTop: $('.questioncontainer4').offset().top
			}, 1000);				   
		 });	

		$('.q5').click(function(){
			$('html, body').animate({
				scrollTop: $('.questioncontainer5').offset().top
			}, 1000);				   
		 });

		$('.Dwnstky').click(function(){
			$('html, body').animate({
				scrollTop: $('.container3').offset().top
			}, 1000);				   
		 });

});