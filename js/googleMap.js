function initialize() {
  var posMarker1 = {lat: 55.759890, lng: 37.606270};
  var posMarker2 = {lat: 55.743556, lng: 37.593845};
  var posMarker3 = {lat: 55.729433, lng: 37.627365};
  var posMarker4 = {lat: 55.742004, lng: 37.658102};
  var posMarker5 = {lat: 55.760236, lng: 37.641538};
  var posMarker6 = {lat: 55.778734, lng: 37.698780};
  var posMarker7 = {lat: 55.738439, lng: 37.694883};
  var posMarker8 = {lat: 55.719060, lng: 37.613196};
  var iconBlue = '../img/icon-blue.png';
  var iconWhite = '../img/icon-white.png';


  var mapProp = {
    center:new google.maps.LatLng(55.7496945,37.6214988),
    zoom:12,
    disableDefaultUI:true,
    mapTypeId:google.maps.MapTypeId.ROADMAP

  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var marker1=new google.maps.Marker({
  position:posMarker1,
  icon: iconBlue
  });
  marker1.setMap(map);

  var marker2=new google.maps.Marker({
  position:posMarker2,
  icon: iconBlue
  });
  marker2.setMap(map);

  var marker3=new google.maps.Marker({
  position:posMarker3,
  icon: iconBlue
  });
  marker3.setMap(map);

  var marker4=new google.maps.Marker({
  position:posMarker4,
  icon: iconBlue
  });
  marker4.setMap(map);

  var marker5=new google.maps.Marker({
  position:posMarker5,
  icon: iconWhite
  });
  marker5.setMap(map);

  var marker6=new google.maps.Marker({
  position:posMarker6,
  icon: iconWhite
  });
  marker6.setMap(map);

  var marker7=new google.maps.Marker({
  position:posMarker7,
  icon: iconWhite
  });
  marker7.setMap(map);

  var marker8=new google.maps.Marker({
  position:posMarker8,
  icon: iconWhite
  });
  marker8.setMap(map);


}
google.maps.event.addDomListener(window, 'load', initialize);
