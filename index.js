var lat = 48.873512268066406;
var lon = 2.350416421890259;
var map = null;
                
function initMap() {
                    
    map = new google.maps.Map(document.getElementById("map"), {                   
    center: new google.maps.LatLng(lat, lon), 
    zoom: 19, 
    mapTypeId: google.maps.MapTypeId.ROADMAP, 
    mapTypeControl: true,
    scrollwheel: false, 
    mapTypeControlOptions: {                        
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR 
},                    
navigationControl: true, 
navigationControlOptions: {                        
        style: google.maps.NavigationControlStyle.ZOOM_PAN 
}
});
}
window.onload = function(){                    
    initMap(); 
};