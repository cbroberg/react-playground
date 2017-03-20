



if ("geolocation" in navigator) {
  console.log('Geolocation available!')
} else {
  console.log('Geolocation is not available')
}

navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude)
})

//  https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation