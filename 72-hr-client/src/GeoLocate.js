import React, {useState, useEffect} from 'react';
import Geohash from 'latlon-geohash';
import Events from './Events/Events';

function GeoLocate () {

const [latitude, setLatitude] = useState("");
const [longitude, setLongitude] = useState("");
const [geoHash, setGeoHash] = useState('');

useEffect(() => {
    geoLocation();
    }, []);
    
const geoLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};

const showPosition = async (position) => {
  setLatitude(position.coords.latitude);
  setLongitude(position.coords.longitude);
  setGeoHash(Geohash.encode(position.coords.latitude, position.coords.longitude, 9))
};

useEffect(() => {
    if (latitude && longitude && geoHash) {
      console.log("Latitude:", latitude, "Longitude:", longitude, "geohash:", geoHash);
    
    }
  }, [latitude, longitude, geoHash]);

return(
    <div>
        <Events geoHash={geoHash}/>
    </div>
)

}



export default GeoLocate;
