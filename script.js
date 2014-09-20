window.truckit={};

function initialize() {
       var mapOptions = {
         center: { lat: 37.549233,  lng: -77.453022},
         zoom: 13
       };
       window.truckit.map = new google.maps.Map(document.getElementById('map-canvas'),
           mapOptions);
		   
		   var maymont = new google.maps.LatLng(37.535620, -77.470587);
		   var shockoe = new google.maps.LatLng(37.534565, -77.427242);
		   var vcu = new google.maps.LatLng(37.549233,-77.453022);
		   var image = 'https://cdn4.iconfinder.com/data/icons/car-silhouettes/1000/truck-48.png';
		     var maymontMarker = new google.maps.Marker({
		         position: maymont,
		         map: truckit.map,
		         icon: image
		     });
			 
		     var shockoeMarker = new google.maps.Marker({
		         position: shockoe,
		         map: truckit.map,
		         icon: image
		     });
     }
     google.maps.event.addDomListener(window, 'load', initialize);
	 
	 
	 navigator.geolocation.getCurrentPosition(function (position) {
    var lat = position.coords.latitude;
	var lng = position.coords.longitude;
    var beachMarker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: truckit.map
    });
});