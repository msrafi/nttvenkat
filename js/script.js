$( function() { 
	var $pageflip = $('#pageflip');
	$pageflip.pageflipInit( {
		/* Configuration options */
		PageDataFile: "templates/book.html",
		PageWidth: 850,
		PageHeight: 800,
		FullScreenEnabled: true,
		Margin: 20,
		MarginBottom: 40,
		AutoScale: true,
		AutoStageHeight: true,
		StartPage: 1,
		AutoFlipLoop: 0,
		AutoFlipInterval: 3000,
		ControlbarFile: "common/controlbar_svg.html",
		ControlbarToFront: true,
		HashControl: true,
		ShareLink: "tiaanttdata@gmail.com",
		ShareText: "Venkatesh Girijapathy",
		ShareVia: "@uxteam",
		ShareImageURL: "www.nttdata.com",
		Copyright: Key.Copyright,
		Key: Key.Key
		/* book ID - used as CSS class name */
	}, "book" );
	
	$(document).keydown(function(e){
		setTimeout(function(){
			var hash = location.href.substring(location.href.lastIndexOf('/')+1);
			if (e.keyCode == 39 || e.keyCode == 37) { 
			   if(hash === '2-3'){
					$('#page2').find('h1').addClass('start_anim');
					$('#page2').find('h3').addClass('start_anim');
					
				    setTimeout(function(){						
						setTimeout(function(){
							$(document).find('#page3 .journey_begins_page').addClass('start_anim');
							$(document).find('#page3 .user').addClass('start_anim');							
						}, 19000);
					}, 1000);
			   }else if(hash === '4-5'){				   
					setTimeout(function(){
						$('#page4').find('.content').addClass('text_animation');
						$('.text_animation p.first').animate({
							left: 0
						}, 1000, "linear", function() {															
								$('.text_animation p.first').animate({
									left: 0
								}, 300, "linear", function() {											
									$('.text_animation p.second').animate({
										left: 0
									}, 400,"linear", function(){
										$('.text_animation p.third').animate({
											left: 0
											}, 500,"linear", function(){
												$('.text_animation p.fourth').animate({
												left: 0
												}, 600, "linear", function(){
													$('.text_animation p.fifth').animate({
														left: 0
													}, 700, "linear", function(){
														$('#page5').find('.content').addClass('text_animation');
														$('.text_animation p.first').animate({
															left: 0
														}, 1000, "linear", function() {
															$('.text_animation p.second').animate({
																left: 0
															}, 1000)
														})
														
													});	
												})	
											})	
									} );
										
								});
							}, 2000);						
					}, 1000);					
				}else if(hash === '6-7'){
					setTimeout(function(){
						$('#page6').find('.content').addClass('text_animation');											
						$('.text_animation p.first').animate({
							left: 0
						}, 1500, "linear", function(){
							$('.text_animation p.second').animate({
								left: 0
							}, 2000, "linear", function() {
								$('#page7').find('.content').addClass('text_animation');
								$('.text_animation p.first').animate({
									left: 0
								}, 1500, "linear", function(){
									$('.text_animation p.memory').animate({
										left: '120px'
									},1500)	
								});
							})
						});					
					
					}, 1000);
				}else if(hash === '8-9'){
					setTimeout(function(){
						$('#page8').find('.content').addClass('text_animation');
						$('.text_animation p.first').animate({
							left: 0
						}, 1500, "linear", function(){
							$('.text_animation p.second').animate({
										left: 0
							}, 2000, "linear", function() {
								$('#page9').find('.content').addClass('text_animation');
								$('.text_animation p.first').animate({
									left: 0
								}, 1500, "linear", function(){
									$('.text_animation p.second').animate({
										left: 0
									},1500)	
								});			
							});
						});	
						
					}, 1000);
				}else if(hash === '10-11'){
					setTimeout(function(){
						$('#page10').find('.content').addClass('text_animation');						
						$('.text_animation p.first').animate({
							left: 0
						}, 1500, "linear", function() {
							$('.text_animation p.second').animate({
								left: 0
							}, 2000, "linear", function() {
								$('#page11').find('.content').addClass('text_animation');
								$('.text_animation p.first').animate({
									left: 0
								}, 2000, "linear", function() {										
									$('.text_animation p.second').animate({
										left: 0
									}, 2000, "linear", function() {
												
									});
								});	
							});	
						}); 
					}, 1000);
				}else if(hash === '12-13'){
					setTimeout(function(){
						$('#page12').find('.content').addClass('text_animation');
						$('.text_animation p.first').animate({
							left: 0
						}, 1500, "linear", function() {
							$('.text_animation p.second').animate({
								left: 0
							}, 1500, "linear", function() {									
								$('#page13').find('.content').addClass('text_animation');
								$('.text_animation p.first').animate({
									left: 0
								}, 1000, "linear", function() {	
									$('.text_animation p.second').animate({
									left: 0
								}, 1000, "linear", function() {	
									});								
								});						
							});
						});
					}, 1000);
				}else if(hash === '14-15'){
					setTimeout(function(){
						$('#page14').find('.content').eq(0).addClass('text_animation');
						$('.text_animation p.first').animate({
							left: 0
						}, 1500, "linear", function() {
							$('.text_animation p.second').animate({
								left: 0
							}, 1500, "linear", function() {
								$('#angelo_video').fadeIn('slow');
								$('#music_audio_player').trigger('pause');
								$('#angelo_video').trigger('play');
								setTimeout(function(){
									$('#angelo_video').trigger('pause');
									$('#music_audio_player').trigger('play');
									setTimeout(function(){
										$('#page15').find('.content').eq(0).addClass('text_animation');
										$('.text_animation p.first').animate({
											 left: 0
										}, 1000, "linear", function() {
											$('.text_animation p.second').animate({
												 left: 0
											}, 1500, "linear", function() {
												$('#angelo_video').fadeIn('slow');
												$('#music_audio_player').trigger('pause');
												$('#shiv_video').trigger('play');
												setTimeout(function(){
													$('#shiv_video').trigger('pause');
													$('#music_audio_player').trigger('play');
												}, 67000);
											});	
										});
									}, 500);
								}, 60000);
							});	
						});	
					}, 1500);
				}else if(hash === '16-17'){
					setTimeout(function(){
						$('#page16').find('.content').addClass('text_animation');						
						$('.text_animation p.first').animate({
							left: 0
						}, 1500, "linear", function() {									
								$('.text_animation p.second').animate({
									left: 0
								}, 1500, "linear", function() {
									$('#rashmi_video').fadeIn('slow');
									$('#music_audio_player').trigger('pause');
									$('#rashmi_video').trigger('play');	
									setTimeout(function(){
										$('#rashmi_video').trigger('pause');
										$('#music_audio_player').trigger('play');
										$('#page17').find('.content').eq(0).addClass('text_animation');
										$('.text_animation p.first').animate({
											 left: 0
										}, 1000, "linear", function() {
											$('.text_animation p.second').animate({
												 left: 0
											}, 1500, "linear", function() {
												$('.text_animation p.third').animate({
													left: '400px'
												});
											});	
										});
									}, 46000);
										
								});							
						});
					}, 1000);
				}else if(hash === '18-19'){
					setTimeout(function(){
						$('#page18').find('.content').addClass('text_animation');
						$('.text_animation p.first').animate({
							left: 0
						}, 1500, "linear", function() {							
								$('.text_animation p.second').animate({
									left: 0
								}, 1500, "linear", function() {
									$('.text_animation p.third').animate({
										left: '400px'
									}, 1500 , "linear", function (){
										$('#page19').find('.content').addClass('text_animation');
										$('.text_animation p.first').animate({
											left: 0
										}, 1500 , "linear", function(){
											$('.text_animation p.second').animate({
												left: 0
											},1500, "linear", function() {
												$('.text_animation p.third').animate({
													left:'400px'
												},1500);
											});
										});	
									});	
								});							
						});
					}, 1000);
				}else if(hash === '20-21'){
					setTimeout(function(){
						$('#page20').find('.content').addClass('text_animation');
						$('.text_animation p.first').animate({
							left: 0
						}, 1500, "linear", function() {
							$('.text_animation p.second').animate({
								left: 0
							}, 1500, "linear", function() {
								$('.text_animation p.third').animate({	
									left: '200px'
								}, 1500, "linear", function() {
									$('#page21').find('.content').addClass('text_animation');
									$('.text_animation p.first').animate({
										left: 0
									}, 1500, "linear", function() {
										$('.text_animation p.second').animate({
											left: 0
										}, 1500);
									})	
								})	
							});						
						});
					}, 1000);
					
					
				}	
			}
		}, 1000);
	});
	
	

});
$(document).ready(function(){
	setTimeout(function(){ }, 1000);
});