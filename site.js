function initMap() { 	
    var belluci = '<h4 style="color:black;text-align:left;padding-left:3vw;">'+'Belluci’s Italian'+'</h4>'+'<div class="row align-items-center">'
    +'<div class="col-12 col-md-5">'+'<img src="images/location/bellucis_logo.jpg">'+'</img>'+'</div>'
      +'<div class="col-12 col-md-7"style="padding:1vw;margin:0;"  id="child1">'+'<p>'+
      '"Belluci\'s demonstrates a new concept, a new food philosophy – the dawn of a new era in Canberra dining. Having been established more than 20 years ago, Belluci\'s fast became an iconic name in Canberra. To bring you the finest dishes, we’ve gone back to traditional Italian routes, creating simple, rustic food." Belluci\'s Italian Website.'
      +'</p>'+'</div>'+'</div>';
    var italian = '<h4 style="color:black;text-align:left;padding-left:3vw;">'+'Italian and Sons'+'</h4>'+'<div class="container row align-items-start">'+
    '<div class="col-12 col-md-5" style="padding:0;margin:0;">'+'<img src="images/location/is_logo.jpg">'+'</img>'+'</div>'
      +'<div class="col-12 col-md-7" style="padding:1vw;margin:0;" id="child1">'+'<p>'+
      '"A casual Italian trattoria that specialises in wood fired pizzas such as Rucola with Prosciutto di Parma, rucola & reggiano. Don\'t miss daily changing main dishes of the day such as their wood roast suckling pig, rosemary, garlic, baked baby fennel & mustard fruits." Australian Good Food Guide.'
      +'</p>'+'</div>'+'</div>';
     var chairman = '<h4 style="color:black;text-align:left;padding-left:3vw;">'+'Chairman & Yip'+'</h4>'+'<div class="row align-items-center">'
    +'<div class="col-12 col-md-5">'+'<img src="images/location/chairman_logo.jpg">'+'</img>'+'</div>'
      +'<div class="col-12 col-md-7" style="padding:1vw;margin:0;"  id="child1">'+'<p>'+
      '"The Chairman & Yip has become one of Canberra’s longest standing and most highly regarded institutions, having received numerous awards over the years,                 offering an ever consistent and professional quality of service for corporate dining, conferences and presentations.'
      +'</p>'+'</div>'+'</div>';
      var noodle = '<h4 style="color:black;text-align:left;padding-left:3vw;">'+'Dickson Asian Noodle House'+'</h4>'+'<div class="row align-items-center">'
    +'<div class="col-12 col-md-5">'+'<img src="images/location/noodle_logo.jpg">'+'</img>'+'</div>'
      +'<div class="col-12 col-md-7" style="padding:1vw;margin:0;"  id="child1">'+'<p>'+
      '"The Dickson Asian Noodle House specialises in traditional Malaysian, Thai and Lao cuisine. The dining atmosphere is casual and cosy providing for a la carte dining, banquets and take away." Vibe FM Website.'
      +'</p>'+'</div>'+'</div>';
      var jewel = '<h4 style="color:black;text-align:left;padding-left:3vw;">'+'Jewel of India'+'</h4>'+'<div class="row align-items-center">'
    +'<div class="col-12 col-md-5">'+'<img src="images/location/jewel_logo.jpg">'+'</img>'+'</div>'
      +'<div class="col-12 col-md-7" style="padding:1vw;margin:0;"  id="child1">'+'<p>'+
      '"Finding a balance between dishes inspired by authentic recipes and creating a modern take on classic cuisine sees a loyal following of Canberra locals returning for a mouth-watering feast." Australian Good Food Guide Website.'
      +'</p>'+'</div>'+'</div>';
      var bluginger = '<h4 style="color:black;text-align:left;padding-left:3vw;">'+'Blu Ginger'+'</h4>'+'<div class="row align-items-center">'
    +'<div class="col-12 col-md-5">'+'<img src="images/location/bluginger_logo.jpg">'+'</img>'+'</div>'
      +'<div class="col-12 col-md-7" style="padding:1vw;margin:0;"  id="child1">'+'<p>'+
      '"At Blu Ginger we use only the freshest locally sourced produce, combined with authentic spices imported directly from the sub-continent, to offer classic, traditional recipes with a modern twist, creating a unique and memorable dining experience for you." Blu Ginger Website.'
      +'</p>'+'</div>'+'</div>';
      var locations = [
    [belluci, -35.225401, 149.152825],
    [italian, -35.306401, 149.01125],
    [chairman, -35.330401, 149.232825],
    [noodle, -35.540401, 149.132825],
    [jewel, -35.420401, 149.2425825],
    [bluginger,-35.300401, 149.132825]
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: new google.maps.LatLng(-35.320401, 149.167825),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) { 
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
     
    } 