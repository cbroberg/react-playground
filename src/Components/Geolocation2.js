import React, { Component } from 'react';

var GlobalLat = null

class GeoLocation extends Component {

    constructor(props) {
      super(props);

      this.GetLatitude = this.GetLatitude.bind(this)
      console.log('Constructor executed ... ')
    }

    GetLatitude() {
        // var latitude  = position.coords.latitude;
        // var longitude = position.coords.longitude;

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
        // console.log(position.coords.latitude)
        GlobalLat = position.coords.latitude
        console.log(GlobalLat)
        return GlobalLat
        })

        // console.log('Geolocation available!', '1')
        
    } 

    else {

    console.log('Geolocation is not available')
    }

    }
    
    render() {
        var MyString = 'This sucks a little less now'
        var MyNumber = 42
        var Lat = parseFloat(GlobalLat)
        // var lat = this.GetLatitude()
        console.log(this.GetLatitude())
        return (
            <div>
                { MyString } { MyNumber } { Lat } { GetLat }
            </div>
        );
    }
}

function GetLat() {
var lat = null
    navigator.geolocation.getCurrentPosition(function(position) {
        lat = position.coords.latitude
        console.log(lat)
        return lat
    })
}

export default GeoLocation;