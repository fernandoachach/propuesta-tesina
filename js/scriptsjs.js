$(document).ready(function(){


	var windowHeight = $(window).height();
	var barraAltura = $('.barra').innerHeight();

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll > windowHeight){
			$('.barra').addClass('fixed');
			$('.body').css({'margin-top': barraAltura + 'px'});
		}
		else{
			$('.barra').removeClass('fixed');
			$('.body').css({'margin-top':'0px'});
		}

		var windowWidth = $(window).width();
		if(windowWidth > 439){
			$('.navegacion-principal').addClass('hiddenDos');
		}
	});

	
	$('.menu-movil').on('click' , function(){
		$('.navegacion-principal').slideToggle();
	});

	 $('#video').click(function(){
             // Codigo para activar pantalla completa en Chrome o Safari 5
             //Seleccionamos el elemnento video del ID video, en este caso la misma etiqueta video
             $('#video')[0].webkitEnterFullScreen();
                 
             /* Codigo para activar pantalla completa en Firefox 8 o proximas actualizaciones
             $('#video')[0].mozRequestFullScreen();
             */
         
    });





});


