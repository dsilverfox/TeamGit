import React from 'react';
import './App.css';
import GeoLocate from './GeoLocate'



function App () {

  // const [latitude, setLatitude] = useState("");
  //   const [longitude, setLongitude] = useState("");
  //   const [geoHash, setGeoHash] = useState('');
    // const [locationDataFound, setLocationDataFound] = useState(false);
    

  //   useEffect(() => {
  //   geoLocation();
  // }, []);

  //   const geoLocation = () => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(showPosition);
  //     } else {
  //       console.log("Geolocation is not supported by this browser.");
  //     }
  //   };
  //   const showPosition = async (position) => {
  //     setLatitude(position.coords.latitude);
  //     setLongitude(position.coords.longitude);
  //     setGeoHash(Geohash.encode(position.coords.latitude, position.coords.longitude, 9))
  //   };
  
  //   useEffect(() => {
  //     if (latitude && longitude && geoHash) {
  //       console.log("Latitude:", latitude, "Longitude:", longitude, "geohash:", geoHash);
      
  //     }
  //   }, [latitude, longitude, geoHash]);



  return (
    <div>
      <GeoLocate/>
    </div>
  );
}

export default App;
