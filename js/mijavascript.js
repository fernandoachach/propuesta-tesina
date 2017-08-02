var api = 'AIzaSyAkZHlQ_6Bl5zM286RxTCCi21Vd4GiSpqk';
var api2 = 'AIzaSyAT4Bl0AkxUo8ml01gPNIQpfe3jgzfg9YY';


function initMap() {
	var latLng ={
		lat : 19.169619,
		lng: -96.142046
	};
        var map = new google.maps.Map(document.getElementById('mapa'), {
          'center': latLng, 
          'zoom': 18,
          'mapTypeId': google.maps.MapTypeId.ROADMAP,
        });

        var contenido = '<h2>Universidad Veracruzana</h2>'+
        				'<p>Puesta del Sol s/n, Vistamar, 91780 Veracruz, Ver., México</p>'+
        				'<p>uv.mx</p>';

        var informacion = new google.maps.InfoWindow({
        	content: contenido
        });

        var marker = new google.maps.Marker({
        	position: latLng,
        	map: map,
        	title: 'ACHACH'
        });

        marker.addListener('click', function(){
        	informacion.open(map, marker);
        });
      }



