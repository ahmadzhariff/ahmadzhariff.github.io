$(document).ready(function(){
				$("#calendar").click(function() {
					var lable = $('#calendar').attr('class').split(' ');
					
					if (lable == "text-center,calendar"){
						$("#calendar").addClass('hasClass');
						$("#location").removeClass('hasClass');
						$("#call").removeClass('hasClass');
						$(".selectCalendar").show(1000);
						$(".selectLoc").hide(1000);
						$(".selectCall").hide(1000);
					} else {
						$("#calendar").removeClass('hasClass');
						$("#location").removeClass('hasClass');
						$("#call").removeClass('hasClass');
						$(".selectCalendar").hide(1000);
					}
					
				});
				
				$("#location").click(function() {
					var lable = $('#location').attr('class').split(' ');
					
					if (lable == "text-center,location"){
						$("#location").addClass('hasClass');
						$("#call").removeClass('hasClass');
						$("#calendar").removeClass('hasClass');
						$(".selectLoc").show(1000);
						$(".selectCall").hide(1000);
						$(".selectCalendar").hide(1000);
					} else {
						$("#location").removeClass('hasClass');
						$("#call").removeClass('hasClass ');
						$("#calendar").removeClass('hasClass');
						$(".selectLoc").hide(1000);
					}
					
				});
				
				$("#call").click(function() {
					var lable = $('#call').attr('class').split(' ');
					
					if (lable == "text-center,call"){
						$("#call").addClass('hasClass');
						$("#location").removeClass('hasClass');
						$("#calendar").removeClass('hasClass');
						$(".selectCall").show(1000);
						$(".selectLoc").hide(1000);
						$(".selectCalendar").hide(1000);
					} else {
						$("#call").removeClass('hasClass ');
						$("#location").removeClass('hasClass');
						$("#calendar").removeClass('hasClass');
						$(".selectCall").hide(1000);
					}
					
				});
			});