$('.carousel').carousel({
        interval: false
    });

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 42.1019207, lng: 12.1708905 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
