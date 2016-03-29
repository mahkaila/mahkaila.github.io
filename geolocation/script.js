window.onload = function() {

	// Check to see if the browser supports the GeoLocation API.
	if (navigator.geolocation) {
	
		navigator.geolocation.getCurrentPosition(function(position) {
			var lat = position.coords.latitude;
			var lon = position.coords.longitude;
			showMap(lat, lon);
		});

	} else {
  // Print out a message to the user.
  	document.write('Your browser does not support GeoLocation');
	}
	
}

function showMap(lat, lon) {
	// Create a LatLng object with the GPS coordinates.
	var myLatLng = new google.maps.LatLng(lat, lon);
	
	var mapOptions = {
  	zoom: 8,
  	center: myLatLng,
  	mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	
	var marker = new google.maps.Marker({
  	position: myLatLng,
  	map: map,
 	 title: 'Found you!'
	});
}

